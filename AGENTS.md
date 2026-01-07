# Project Context

**Always use `bun`, not `npm`.**

## Commands

```bash
bun run typecheck                   # Fast type check (run after route changes)
bun run test --run                  # Run tests (always use --run)
bun run test -u --run               # Update snapshots
bun run lint:file -- "file.ts"      # Lint specific file
bun run lint:claude && bun run test # Before PR
```

| Command               | Tool     | Purpose                      |
| --------------------- | -------- | ---------------------------- |
| `rg`                  | ripgrep  | Fast text search             |
| `sg 'pattern'`        | ast-grep | Structural code search (AST) |
| `sd 'old' 'new' file` | sd       | Modern sed                   |
| `f`                   | fd       | Fast file find               |
| `c file`              | bat      | Cat with syntax highlighting |
| `lg`                  | lazygit  | Git TUI                      |
| `stats`               | tokei    | Code statistics              |

## Golden Rules

1. `useEffect` is bad → colocate logic in event handlers
2. `useState` is bad → derive from existing state/loader data
3. Custom hooks are bad → use plain functions
4. Props drilling is bad → use zustand or `useLoaderData`
5. Always use `href()` for React Router links
6. Always run `bun run typecheck` after route changes
7. Never redirect to missing routes → create placeholder first
8. Errors in loader promises → catch and return, don't throw
9. Max 1 Prisma include nesting → use Promise.all instead
10. Never use `any` → find proper types or use `unknown`

## Quick Patterns

```typescript
// Zustand state (never add setters)
useStore.setState({ value: "new" });
const val = useStore.getState().value; // In event handlers, not render

// Type-safe links
import { href } from "react-router";
href("/org/:orgId", { orgId });

// Type-safe filtering
const filtered = items.filter((x): x is T => Boolean(x));

// Parallel queries
const [a, b] = await Promise.all([getA(), getB()]);

// Inline snapshots (leave empty, run -u)
expect(result).toMatchInlineSnapshot();
```

## Critical Rules

- **NEVER** run commands with `&` to background - use tmux
- **NEVER** commit unless asked
- **NEVER** start dev servers - ask user
- **NEVER** touch `.env`, secrets, or production data
- **NEVER** revert files you didn't create - user changes may exist
- Use **kebab-case** for filenames
- Write temp files to `./tmp` not `/tmp`

## Work Principles

- **Work doggedly**: Be autonomous. Continue until blocked. Justify every stop.
- **Work smart**: Add logging to check assumptions when debugging.
- **Check your work**: Run code after writing. For long processes, wait 30s then check logs.
- **Ask first**: Confirm assumptions before complex architecture. Clarify ambiguous/risky requests.

## ExecPlans

For complex features or significant refactors, use an ExecPlan (see `.agent/PLANS.md`).

## Handoff Document

When done working, create/update `HANDOFF.md` with:

- Brief summary of recent work
- Last couple of user prompts
- Goal: New agent can pick up using README + handoff

## Context7 (MCP)

- Always `resolve-library-id` before `get-library-docs`
- Fetch minimal targeted docs, summarize inline
- If docs not found, say so explicitly

## Guides

| Guide                       | Topics                                                |
| --------------------------- | ----------------------------------------------------- |
| `.claude/guides/ui.md`      | React, React Router, Hooks, Zustand, Tailwind, shadcn |
| `.claude/guides/data.md`    | Prisma, Spiceflow API, Zod validation, AI SDK         |
| `.claude/guides/quality.md` | TypeScript patterns, Testing, Linting                 |
| `.claude/guides/ops.md`     | GitHub CLI, Sentry, Doppler, Stripe, Fly.io, pnpm     |

## Environment

- **OS**: macOS (Apple Silicon)
- **Terminal**: Ghostty + tmux (`Ctrl+a` prefix)
- **Editor**: Neovim (`<leader>ff` files, `<leader>fg` grep, `gd` definition)
- **Theme**: Catppuccin Mocha

### Tmux

```bash
tmux new-session -d -s name 'command'  # Background task
tmux capture-pane -t name:0 -S -100 -p # Read output
tmux kill-session -t name              # Stop
```
