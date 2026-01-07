# UI Development Guide

React, React Router, Styling patterns for frontend development.

---

## React Rules

### Hooks Must Be in Render Scope
Hooks **MUST ALWAYS** be called in component render scope. Never inside closures or event handlers. Put all hooks at the start of component functions.

### Avoid These Patterns
| Pattern | Why Bad | Alternative |
|---------|---------|-------------|
| `useEffect` | Usually unnecessary | Colocate logic in event handlers |
| `useState` (excessive) | Derived state is better | Compute from existing state/loader |
| `useCallback` | Spreads like a virus | Only for ref props |
| Custom hooks | Creates complexity | Use plain functions |
| Props drilling | Verbose | Use zustand or loader data |

### State Rules
- Never pass functions to hook dependencies
- Don't trust local state for server calls → use `useStore.getState()`
- `useRef<T>(undefined)` - always add undefined with generics
- `{Boolean(count) && <Component />}` - wrap numbers in Boolean()

### Zustand Patterns
```typescript
// NEVER add setter methods - use setState directly
useStore.setState({ variable: 'new value' })

// Get state in event handlers (not stale)
useStore.getState().stateValue
```

---

## React Router v7

### Navigation State
```typescript
const navigation = useNavigation()
if (navigation.state === 'loading' || navigation.state === 'submitting') {
    return null
}
```

### Route Types (CRITICAL)
```bash
# After creating/modifying routes, ALWAYS run:
bun run typecheck  # Generates types first
```

```typescript
// Import from virtual +types directory
import type { Route } from './+types/your-route-name'

// Type loaders and components
export async function loader({ request, params }: Route.LoaderArgs) {}
export default function Page({ loaderData }: Route.ComponentProps) {}
```

### Type-Safe Links (ALWAYS use href)
```typescript
import { href } from 'react-router'
const path = href('/org/:orgId', { orgId })
```

### Layout Routes
- Layout loaders run for all child routes
- Use `<Outlet />` to render children
- Export `Route` type for children to use with `useRouteLoaderData`

### Flat Routes Convention
- `$id` for params, `.` for slashes, kebab-case
- `org.$orgId.site` → `/org/:orgId/site`
- `_index` suffix for non-layout routes

### Loader Patterns
```typescript
// Errors in promises → catch and return, NEVER throw
export async function loader({ params }: Route.LoaderArgs) {
    const promise = doSlowWork(params.id).catch(error => {
        notifyError(error)
        return error
    })
    return { promise }
}
```

### Navigation
- Use `Link` over `navigate()` function
- Use `useNavigate` over `window.location.href`
- Never redirect to missing routes → create placeholder first

---

## Styling (Tailwind v4)

### Core Patterns
```tsx
// Use flex + gap, avoid margins
<div className="flex flex-col gap-4">

// Use size-X for square elements
<div className="size-4">  // not w-4 h-4

// Use grow, not flex-1
<div className="grow">

// cn() for conditional classes
cn('base-class', isActive && 'active-class')
```

### Tailwind Rules
- Use shadcn theme colors (no `dark:` variants needed)
- Spacing: multiples of 4 (p-4, gap-8, m-12)
- Tailwind v4: no `tailwind.config.js` - config in CSS

### Icons (Lucide)
```tsx
// Always add Icon suffix
import { ImageIcon } from 'lucide-react'
```

### Components
- shadcn components: `src/components/ui`
- Check existing components before creating new ones
- Never manually add shadcn - use CLI
