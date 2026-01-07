# Operations Guide

GitHub, Sentry, Doppler, Stripe, Fly.io patterns.

---

## GitHub CLI

### Common Operations
```bash
gh issue create --title "Title" --body "Body"
gh pr create --title "Title" --body "Body"
gh run list                           # List actions runs
gh run watch <id> --exit-status       # Wait for completion (10min timeout)
gh run view <id> --log-failed | tail -n 300
gh pr checks --watch --fail-fast      # Watch PR CI
```

### PR Reviews (gh-pr-review extension)
```bash
gh pr-review review view 42 -R owner/repo --unresolved
gh pr-review comments reply 42 -R owner/repo --thread-id PRRT_xxx --body "Fixed"
gh pr-review threads resolve 42 -R owner/repo --thread-id PRRT_xxx
```

### Reading Repos (gitchamber.com)
```bash
# Always fetch docs first
curl https://gitchamber.com

# Examples
curl https://gitchamber.com/repos/facebook/react/main/files
curl https://gitchamber.com/repos/owner/repo/main/files?glob=**/*.ts
curl https://gitchamber.com/repos/owner/repo/main/search/useState
```

### Issue/PR Bodies
Never use markdown headings. Use simple paragraphs, lists, code blocks. Be concise.

---

## Sentry Error Tracking

### notifyError Usage
```typescript
import { notifyError } from './errors'

// In Spiceflow onError callback
// In catch blocks instead of console.error
// In waitUntil .catch handlers
notifyError(error, 'context message')
```

### errors.ts Template
```typescript
import { captureException, flush, init } from 'sentries'

init({
    dsn: 'YOUR_DSN',
    tracesSampleRate: 0.01,
    beforeSend(event) {
        if (process.env.NODE_ENV === 'development') return null
        return event
    },
})

export async function notifyError(error: any, msg?: string) {
    console.error(msg, error)
    captureException(error, { extra: { msg } })
    await flush(1000)
}

export class AppError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'AppError'
    }
}
```

### AppError
Use `AppError` for user-readable errors (skips Sentry).

---

## Doppler Secrets

Never use `process.env` directly. Use typed `env.ts`:
```typescript
import { env } from './env'
env.DATABASE_URL  // Type-safe
```

Never run doppler CLI yourself - could affect production.

---

## Stripe Billing

### Customer ID Pattern
```typescript
let customerId = org.stripeCustomerId

if (!customerId) {
    const customer = await stripe.customers.create({
        email: org.email,
        name: org.name,
    })
    customerId = customer.id
    await prisma.org.update({
        where: { id: orgId },
        data: { stripeCustomerId: customerId },
    })
}

await stripe.checkout.sessions.create({ customer: customerId, ... })
```

### Subscription States
| State | Meaning |
|-------|---------|
| `active`, `trialing` | User can access features |
| `canceled`, `incomplete_expired`, `unpaid` | Treat as no subscription |

---

## Fly.io Deployment

### Commands
```bash
pnpm fly:preview logs --no-tail | tail -n 100
# Pipe long output to .log file, grep for errors
```

### Rules
- Never deploy yourself - ask user
- Usually 2 apps: staging + production
- Use `pnpm fly:preview` or `pnpm fly:prod`

---

## pnpm Workspaces

### Commands
```bash
pnpm install package           # Add package (in workspace folder)
pnpm update -r packagename     # Update across workspaces
pnpm update -r --latest pkg    # Update to latest
```

### Rules
- Run commands from package folder, not root
- Never manually edit package.json for deps
- Use `pnpm add` only for new packages, not updates

### Fixing Duplicates
```bash
pnpm dedupe packagename
pnpm -r why zod@3.25.76        # Find cause
pnpm update -r --latest problematic-packages
```
