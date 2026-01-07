# Code Quality Guide

TypeScript patterns, testing, and linting.

---

## TypeScript

### Imports
```typescript
// Node builtins: import module, not named exports
import fs from 'node:fs'
fs.writeFileSync('file.txt', 'content')

// Never use require - always ESM
// Use absolute imports from tsconfig paths
```

### Function Arguments
```typescript
// Object args for 2+ parameters
function createUser({ name, email }: { name: string; email: string }) {}
```

### Arrow Functions
```typescript
// ALWAYS use block bodies
onClick={() => {
    setState('')
}}
items.map((item) => {
    return item.value
})
```

### Array Operations
Prefer `.map`, `.filter`, `.flatMap` over loops. Always think how to convert for-loops to expressions.

### Type-Safe Filtering
```typescript
function isTruthy<T>(value: T): value is NonNullable<T> {
    return Boolean(value)
}
const filtered: string[] = items.filter(isTruthy)
```

### Early Returns
```typescript
// Minimal nesting, avoid else
function process(user: User | null) {
    if (!user) return null
    if (!user.active) return null
    return user.data
}
```

### Never Use `any`
- Search for proper types, read `.d.ts` files
- Use `unknown` in catch blocks
- `as any` is last resort only

### IIFE for Complex Init
```typescript
const value: string = (() => {
    if (!config) return ''
    if (typeof config === 'string') return config
    return config.default ?? ''
})()
```

### Type Inference
- **Add explicit types**: empty arrays, function params, exports, complex objects
- **Let infer**: obvious initialization, inline arrow functions with typed context

### Union Types Over Enums
```typescript
type Status = 'pending' | 'active' | 'completed'

// Const object when runtime access needed
const Status = { Pending: 'pending', Active: 'active' } as const
type Status = (typeof Status)[keyof typeof Status]
```

### Async Patterns
```typescript
// Parallel when independent
const [a, b, c] = await Promise.all([getA(), getB(), getC()])

// allSettled when partial success OK
const results = await Promise.allSettled(items.map(process))
```

### Error Handling
```typescript
// Never silently swallow - log with context
try {
    await save(user)
} catch (e) {
    console.error(`Failed to save user ${user.id}:`, e)
    throw e
}
```

### Comments
- Minimize useless comments
- Preserve detailed context from prompts
- Never reference iteration history

---

## Testing

### Core Pattern: Inline Snapshots
```typescript
// Leave empty first time
expect(result).toMatchInlineSnapshot()

// After -u flag fills it in:
expect(result).toMatchInlineSnapshot(`"expected"`)
```

### Commands
```bash
bun run test --run              # Always use --run
bun run test -u --run           # Update snapshots
bun run test -- -t "name"       # Specific test
```

### Rules
| Do | Don't |
|----|-------|
| Use `toMatchInlineSnapshot()` | Write snapshot content manually |
| Read tests after `-u` | Trust updates blindly |
| Test complex logic | Create dumb placeholder tests |
| Generate test data programmatically | Hardcode repetitive arrays |
| Use `describe` and `test` | Use `beforeAll`, mocks |

### What NOT to Test
- React components (NEVER)
- Database mutations (unless asked)
- Browser-dependent code

### Long Snapshots
```typescript
expect(largeResult).toMatchFileSnapshot('snapshots/result.json')
```

### Timeouts
- Expect timeouts: max 5 seconds
- Test timeouts: up to 60 seconds if needed
