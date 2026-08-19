#!/usr/bin/env node

const ACCESS_TOKEN = process.env.GMC_ACCESS_TOKEN
const MERCHANT_ID = process.env.GMC_MERCHANT_ID

if (!ACCESS_TOKEN || !MERCHANT_ID) {
  console.error(JSON.stringify({ error: 'GMC_ACCESS_TOKEN and GMC_MERCHANT_ID environment variables required' }))
  process.exit(1)
}

const BASE_URL = `https://shoppingcontent.googleapis.com/content/v2.1/${MERCHANT_ID}`

async function api(method, path, body) {
  const headers = {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  }
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { ...headers, Authorization: '***' }, body: body || undefined }
  }
  const res = await fetch(`${BASE_URL}${path}`, {
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
    case 'products':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args['max-results']) params.set('maxResults', args['max-results'])
          if (args['page-token']) params.set('pageToken', args['page-token'])
          result = await api('GET', `/products?${params}`)
          break
        }
        case 'get':
          if (!rest[0]) { result = { error: 'Product ID required' }; break }
          result = await api('GET', `/products/${rest[0]}`)
          break
        case 'upsert': {
          if (!args.body) { result = { error: '--body <json string> required' }; break }
          const body = JSON.parse(args.body)
          result = await api('POST', '/products', body)
          break
        }
        case 'delete':
          if (!rest[0]) { result = { error: 'Product ID required' }; break }
          result = await api('DELETE', `/products/${rest[0]}`)
          break
        default:
          result = { error: 'Unknown products subcommand. Use: list, get, upsert, delete' }
      }
      break

    case 'status':
      switch (sub) {
        case 'product':
          if (!rest[0]) { result = { error: 'Product ID required' }; break }
          result = await api('GET', `/productstatuses/${rest[0]}`)
          break
        case 'account':
          result = await api('GET', `/accountstatuses/${MERCHANT_ID}`)
          break
        default:
          result = { error: 'Unknown status subcommand. Use: product, account' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          products: 'products [list [--max-results <n>] [--page-token <token>] | get <product_id> | upsert --body <json> | delete <product_id>]',
          status: 'status [product <product_id> | account]',
        },
        note: 'Verify required product attributes and policy fields against current Google Merchant Center docs before finalizing feed logic.',
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})
