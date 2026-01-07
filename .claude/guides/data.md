# Data Layer Guide

Prisma, Spiceflow API, Zod validation, and AI SDK patterns.

---

## Prisma

### Before Writing Queries
**ALWAYS read `schema.prisma` first** to understand table structure.

### Rules
| Rule | Reason |
|------|--------|
| Never add/modify tables | Ask user to do it |
| Never run `db push` | Could mutate production |
| Use upsert over update | Handles missing rows |
| Max 1 include nesting | Performance - use Promise.all instead |
| Use array transactions | Never function transactions |

### Query Patterns
```typescript
// Always check user access (security)
const resource = await prisma.resource.findFirst({
    where: {
        resourceId,
        parentResource: { users: { some: { userId } } }
    },
})
if (!resource) throw new AppError('cannot find resource')

// Parallelize queries
const [users, posts] = await Promise.all([
    prisma.user.findMany(),
    prisma.post.findMany(),
])

// Array transactions (NOT function transactions)
const operations: Prisma.PrismaPromise<any>[] = []
// Push operations...
await prisma.$transaction(operations)
```

### Error Classes
```typescript
// User-readable errors (skip Sentry)
throw new AppError('user has no subscription')

// HTTP errors
throw new ResponseError(403, JSON.stringify({ message: 'forbidden' }))
```

---

## Spiceflow API

### Always Fetch Docs First
```bash
curl -s https://gitchamber.com/repos/remorses/spiceflow/main/files/README.md
```

### Client Usage
```typescript
const { data, error } = await apiClient.route.method()

// If data exists, rename
const { data: newData, error } = await apiClient...
```

### When to Use
- **React Router forms**: Single interaction per page
- **Spiceflow client**: Components across multiple routes, deep interactions

### Authorization
Always verify userId has access to rows:
```typescript
prisma.site.findFirst({
    where: { users: { some: { userId } } }
})
```

---

## Zod Validation

### Schema → Type Pattern
```typescript
const UserSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    role: z.enum(['admin', 'user']),
})
type User = z.infer<typeof UserSchema>
```

### Parse at Boundaries
```typescript
// Throws on invalid
const user = UserSchema.parse(body)

// Safe parse for custom handling
const result = UserSchema.safeParse(body)
if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 })
}
```

### Compose Schemas
```typescript
const CreateUserSchema = UserSchema.omit({ id: true })
const UpdateUserSchema = UserSchema.partial()
```

### JSON Schema (Zod v4)
```typescript
import { toJSONSchema } from 'zod'  // NOT zod-to-json-schema
const jsonSchema = toJSONSchema(mySchema, { removeAdditionalStrategy: 'strict' })
```

### Complex Prisma Types
```typescript
// Don't recreate Prisma schema - use type assertion
z.any() as ZodType<PrismaTable>
```

---

## AI SDK (Vercel)

### Fetch Docs
```bash
curl -s https://gitchamber.com/repos/vercel/ai/main/files
```

### Prefer Streaming
- `streamText` over `generateText`
- `streamObject` over `generateObject`

Never use OpenAI SDK directly - always Vercel AI SDK.
