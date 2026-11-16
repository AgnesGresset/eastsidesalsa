<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# EastSideSalsa

- Small, typed TypeScript. No `any`, no type assertions, no JSDoc. Comments only for a non-obvious why.
- `utils/` is for pure shared functions. Hooks live next to their component. Do not create `lib/` for first-party code.
- Nav and footer links stay in those components.
- Tailwind colors are the `primary`, `secondary`, and `tertiary` tokens. Repeat a class string only once: extract a constant or a component.
- Colocate Vitest tests. Prefer `it.each`. After writing tests, break one assertion, confirm it fails, then restore it.
