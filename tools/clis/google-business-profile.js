#!/usr/bin/env node

const ACCESS_TOKEN = process.env.GBP_ACCESS_TOKEN

if (!ACCESS_TOKEN) {
  console.error(JSON.stringify({ error: 'GBP_ACCESS_TOKEN environment variable required (OAuth 2.0 access token)' }))
  process.exit(1)
}

const ACCOUNT_BASE = 'https://mybusinessaccountmanagement.googleapis.com/v1'
const INFO_BASE = 'https://mybusinessbusinessinformation.googleapis.com/v1'

async function api(base, method, path, body) {
  const headers = {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  }
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${base}${path}`, headers: { ...headers, Authorization: '***' }, body: body || undefined }
  }
  const res = await fetch(`${base}${path}`, {
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
    case 'accounts':
      switch (sub) {
        case 'list':
          result = await api(ACCOUNT_BASE, 'GET', '/accounts')
          break
        default:
          result = { error: 'Unknown accounts subcommand. Use: list' }
      }
      break

    case 'locations':
      switch (sub) {
        case 'list': {
          if (!args.account) { result = { error: '--account <accounts/{id}> required' }; break }
          const params = new URLSearchParams({ readMask: args['read-mask'] || 'name,storefrontAddress,phoneNumbers' })
          result = await api(INFO_BASE, 'GET', `/${args.account}/locations?${params}`)
          break
        }
        case 'get': {
          if (!rest[0]) { result = { error: 'Location resource name required (locations/{id})' }; break }
          const params = new URLSearchParams({ readMask: args['read-mask'] || 'name,storefrontAddress,phoneNumbers,regularHours,categories,openInfo' })
          result = await api(INFO_BASE, 'GET', `/${rest[0]}?${params}`)
          break
        }
        case 'update': {
          if (!rest[0]) { result = { error: 'Location resource name required' }; break }
          if (!args.fields) { result = { error: '--fields <comma,separated,updateMask> required' }; break }
          if (!args.body) { result = { error: '--body <json string> required' }; break }
          const body = JSON.parse(args.body)
          result = await api(INFO_BASE, 'PATCH', `/${rest[0]}?updateMask=${args.fields}`, body)
          break
        }
        default:
          result = { error: 'Unknown locations subcommand. Use: list, get, update' }
      }
      break

    case 'posts':
      switch (sub) {
        case 'create': {
          if (!rest[0]) { result = { error: 'Location resource name required' }; break }
          if (!args.summary) { result = { error: '--summary <text> required' }; break }
          const body = {
            languageCode: args.lang || 'en-US',
            summary: args.summary,
            topicType: args.topic || 'STANDARD',
          }
          result = await api(INFO_BASE, 'POST', `/${rest[0]}/localPosts`, body)
          break
        }
        case 'list': {
          if (!rest[0]) { result = { error: 'Location resource name required' }; break }
          result = await api(INFO_BASE, 'GET', `/${rest[0]}/localPosts`)
          break
        }
        default:
          result = { error: 'Unknown posts subcommand. Use: create, list' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          accounts: 'accounts list',
          locations: 'locations [list --account <accounts/id> | get <locations/id> | update <locations/id> --fields <mask> --body <json>]',
          posts: 'posts [create <locations/id> --summary <text> [--topic OFFER|EVENT|STANDARD] | list <locations/id>]',
        },
        note: 'Verify resource names and readMask fields against current Google Business Profile API docs — this API surface has been restructured before.',
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})
