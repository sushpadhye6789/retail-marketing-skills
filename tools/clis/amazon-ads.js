#!/usr/bin/env node

const ACCESS_TOKEN = process.env.AMAZON_ADS_ACCESS_TOKEN
const CLIENT_ID = process.env.AMAZON_ADS_CLIENT_ID
const PROFILE_ID = process.env.AMAZON_ADS_PROFILE_ID
const REGION_BASE_URL = process.env.AMAZON_ADS_BASE_URL || 'https://advertising-api.amazon.com'

if (!ACCESS_TOKEN || !CLIENT_ID) {
  console.error(JSON.stringify({ error: 'AMAZON_ADS_ACCESS_TOKEN and AMAZON_ADS_CLIENT_ID environment variables required (Login with Amazon OAuth)' }))
  process.exit(1)
}

async function api(method, path, body, opts = {}) {
  const headers = {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Amazon-Advertising-API-ClientId': CLIENT_ID,
    'Content-Type': 'application/json',
  }
  if (PROFILE_ID && !opts.noProfile) headers['Amazon-Advertising-API-Scope'] = PROFILE_ID
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${REGION_BASE_URL}${path}`, headers: { ...headers, Authorization: '***' }, body: body || undefined }
  }
  const res = await fetch(`${REGION_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch {
    return { status: res.status, body: text }
  }
}

function parseArgs(args) {
  const result = { _: [] }
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg.startsWith('--')) {
      const key = arg.slice(2)
      const next = args[i + 1]
      if (next && !next.startsWith('--')) {
        result[key] = next
        i++
      } else {
        result[key] = true
      }
    } else {
      result._.push(arg)
    }
  }
  return result
}

const args = parseArgs(process.argv.slice(2))
const [cmd, sub, ...rest] = args._

async function main() {
  let result

  switch (cmd) {
    case 'profiles':
      switch (sub) {
        case 'list':
          result = await api('GET', '/v2/profiles', undefined, { noProfile: true })
          break
        default:
          result = { error: 'Unknown profiles subcommand. Use: list' }
      }
      break

    case 'campaigns':
      if (!PROFILE_ID) { result = { error: 'AMAZON_ADS_PROFILE_ID environment variable required for campaign operations' }; break }
      switch (sub) {
        case 'list':
          result = await api('GET', '/sp/campaigns')
          break
        case 'update': {
          if (!args.body) { result = { error: '--body <json string> required' }; break }
          const body = JSON.parse(args.body)
          result = await api('PUT', '/sp/campaigns', body)
          break
        }
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, update' }
      }
      break

    case 'keywords':
      if (!PROFILE_ID) { result = { error: 'AMAZON_ADS_PROFILE_ID environment variable required' }; break }
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.campaign) params.set('campaignIdFilter', args.campaign)
          result = await api('GET', `/sp/keywords?${params}`)
          break
        }
        default:
          result = { error: 'Unknown keywords subcommand. Use: list' }
      }
      break

    case 'reports':
      if (!PROFILE_ID) { result = { error: 'AMAZON_ADS_PROFILE_ID environment variable required' }; break }
      switch (sub) {
        case 'create': {
          if (!args.start || !args.end) { result = { error: '--start <YYYY-MM-DD> and --end <YYYY-MM-DD> required' }; break }
          const body = {
            name: args.name || 'SP campaign report',
            startDate: args.start,
            endDate: args.end,
            configuration: {
              adProduct: args.product || 'SPONSORED_PRODUCTS',
              groupBy: ['campaign'],
              columns: ['campaignId', 'impressions', 'clicks', 'cost', 'sales14d'],
              reportTypeId: 'spCampaigns',
              timeUnit: 'DAILY',
              format: 'GZIP_JSON',
            },
          }
          result = await api('POST', '/reporting/reports', body)
          break
        }
        case 'get':
          if (!rest[0]) { result = { error: 'Report ID required' }; break }
          result = await api('GET', `/reporting/reports/${rest[0]}`)
          break
        default:
          result = { error: 'Unknown reports subcommand. Use: create, get' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          profiles: 'profiles list',
          campaigns: 'campaigns [list | update --body <json>]  (requires AMAZON_ADS_PROFILE_ID)',
          keywords: 'keywords list [--campaign <campaign_id>]  (requires AMAZON_ADS_PROFILE_ID)',
          reports: 'reports [create --start <date> --end <date> [--name <name>] [--product SPONSORED_PRODUCTS|SPONSORED_BRANDS|SPONSORED_DISPLAY] | get <report_id>]',
        },
        note: 'Reports are asynchronous — create, then poll get until status is COMPLETED before downloading. Set AMAZON_ADS_BASE_URL for a non-North-America region.',
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})
