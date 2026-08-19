#!/usr/bin/env node

const API_KEY = process.env.SMILE_IO_API_KEY

if (!API_KEY) {
  console.error(JSON.stringify({ error: 'SMILE_IO_API_KEY environment variable required' }))
  process.exit(1)
}

const BASE_URL = 'https://api.smile.io/v1'

async function api(method, path, body) {
  const headers = {
    'Authorization': `Bearer ${API_KEY}`,
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
    case 'customers':
      switch (sub) {
        case 'points':
          if (!rest[0]) { result = { error: 'Customer ID required' }; break }
          result = await api('GET', `/customers/${rest[0]}/points`)
          break
        case 'history':
          if (!rest[0]) { result = { error: 'Customer ID required' }; break }
          result = await api('GET', `/customers/${rest[0]}/points/history`)
          break
        case 'award': {
          if (!rest[0]) { result = { error: 'Customer ID required' }; break }
          if (!args.amount) { result = { error: '--amount <n> required' }; break }
          const body = { amount: Number(args.amount), reason: args.reason || 'Manual award' }
          result = await api('POST', `/customers/${rest[0]}/points/earn`, body)
          break
        }
        default:
          result = { error: 'Unknown customers subcommand. Use: points, history, award' }
      }
      break

    case 'rewards':
      switch (sub) {
        case 'list':
          result = await api('GET', '/rewards')
          break
        default:
          result = { error: 'Unknown rewards subcommand. Use: list' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          customers: 'customers [points <customer_id> | history <customer_id> | award <customer_id> --amount <n> [--reason <text>]]',
          rewards: 'rewards list',
        },
        note: 'Lower confidence guide — verify auth flow and exact endpoint paths against current Smile.io developer docs before relying on this in production.',
      }
  }

  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})
