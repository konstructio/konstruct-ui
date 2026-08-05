# CLAUDE.md - AI Assistant Guide for @konstructio/ui

## Overview

This is **@konstructio/ui**, a React component library for Konstruct.io infrastructure products (Kubefirst, Colony). Built with React, TypeScript, Tailwind CSS v4, and Radix UI primitives.

- **Package**: `@konstructio/ui` (npm)
- **Version**: 0.1.2-alpha (active development)
- **Storybook**: https://konstructio.github.io/konstruct-ui
- **React**: 16.8+, 17, 18, 19 compatible

## Project Structure

```
lib/
├── components/          # 40 React components
├── contexts/            # Theme context/provider
├── hooks/               # Custom hooks (useToggle, useTheme)
├── utils/               # Utilities (cn, filterByValue, isClient)
├── domain/              # Type definitions
├── styles/              # CSS themes
└── index.ts             # Main exports
```

## Component File Pattern

Each component follows this structure:
```
ComponentName/
├── ComponentName.tsx           # Main component
├── ComponentName.types.ts      # TypeScript interfaces
├── ComponentName.variants.ts   # CVA variant definitions
├── ComponentName.test.tsx      # Unit tests
├── ComponentName.stories.tsx   # Storybook stories
└── components/                 # Sub-components (optional)
```

## Available Components

### Form Components
- **Input** - Text input with label, error, helperText
- **TextArea** - Multiline text input
- **Select** (alias: Dropdown) - Dropdown select
- **Checkbox** - Checkbox with label
- **Switch** - Toggle switch
- **Radio** - Radio button
- **RadioGroup** - Radio button group
- **RadioCard** - Card-style radio option
- **RadioCardGroup** - Card-style radio group
- **Counter** (alias: NumberInput) - Numeric input with +/- buttons
- **Datepicker** - Date selection
- **TimePicker** - Time selection
- **PhoneNumberInput** - International phone input
- **Range** - Range slider
- **Slider** - Single value slider
- **Autocomplete** - Search with suggestions
- **Filter** - Filter component
- **TagSelect** - Tag selection
- **MultiSelectDropdown** - Multi-select dropdown
- **ImageUpload** - Image upload component

### UI Components
- **Button** - Primary, secondary, tertiary, danger, link variants
- **Badge** - Status badges
- **Card** - Container card
- **Alert** - Alert messages
- **AlertDialog** - Confirmation dialogs
- **Modal** - Modal dialogs
- **Breadcrumb** - Navigation breadcrumbs
- **Divider** - Visual separator
- **Tag** - Tags/chips
- **Tooltip** - Hover tooltips
- **Toast** - Toast notifications
- **Tabs** - Tab navigation
- **Typography** - Text styles

### Layout
- **Sidebar** - Navigation sidebar

### Data Display
- **Table** - Data table
- **VirtualizedTable** - Virtualized table for large datasets
- **PieChart** - Pie chart visualization
- **ProgressBar** - Progress indicator
- **Loading** - Loading states

### Other
- **DropdownButton** - Button with dropdown menu
- **Command** - Command palette (cmdk)

## Common Props Pattern

Most components accept these props:
```typescript
interface CommonProps {
  theme?: 'kubefirst' | 'light' | 'kubefirst-dark' | 'dark';
  className?: string;        // Additional CSS classes
  disabled?: boolean;
}
```

Form components typically include:
```typescript
interface FormProps {
  label?: string | ReactNode;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
}
```

## Variant System (CVA)

Components use `class-variance-authority` for variants:

```typescript
// Example: Button variants
<Button variant="primary" />      // default
<Button variant="secondary" />
<Button variant="tertiary" />
<Button variant="danger" />
<Button variant="link" />
<Button shape="circle" size="large" />
<Button appearance="compact" />
```

## Theme System

Wrap app in `ThemeProvider`:
```tsx
import { ThemeProvider } from '@konstructio/ui';

<ThemeProvider theme="kubefirst">
  <App />
</ThemeProvider>
```

Available themes:
- `kubefirst` (default) - Purple brand theme
- `light` - Light theme
- `kubefirst-dark` - Dark purple theme
- `dark` - Dark theme

Theme is set via `data-theme` attribute on body and stored in cookies.

## Utility Functions

- **cn(...classes)** - Merge Tailwind classes (clsx + tailwind-merge)
- **filterByValue(array, value)** - Filter array by value
- **isClient** - Check if running in browser

## Key Dependencies

- **Radix UI** - Accessible primitives (Dialog, Checkbox, Switch, Slider, Tabs, Toast, Tooltip)
- **TanStack Table** - Table/data grid
- **TanStack Virtual** - Virtualization
- **Chart.js** - Charts
- **Lucide React** - Icons
- **react-day-picker** - Date picker
- **cmdk** - Command palette

## Development Commands

```bash
npm run storybook      # Dev server on :6006
npm run build          # Production build
npm run test           # Run tests with coverage
npm run test:watch     # Watch mode
npm run lint           # ESLint
npm run check:types    # TypeScript check
npm run ci             # Full CI pipeline
```

## Dependency Updates

- **Always update dependencies with `npm run deps:update`, minus `--interactive`** — i.e. run `npx npm-check-updates --format group -u`, then `npm install` and `npm run setup`. Never run the interactive variant (it can't be driven non-interactively), and never bump versions by editing `package.json` manually or with `npm install <pkg>@latest`.
- **Respect `.ncurc.json`**: packages listed in its `reject` array are known to break the toolchain and must NOT be updated. If a new package turns out to be incompatible at its latest version, add it to `reject` instead of pinning workarounds.
- **Keep `peerDependencies` in sync**: after an update, any bumped package that is also listed in `peerDependencies` must have its range updated there too, so the published contract matches the versions actually built and tested against.
- **Regenerate the lockfile from scratch**: `rm -rf node_modules package-lock.json && npm install && npm run setup`. Plain `npm install` over an existing tree prunes the top-level `@emnapi/*` entries (they exist only for the `*-wasm32-wasi` optional bindings macOS never installs), which breaks `npm ci` on the Linux runners. Verify with `docker run --rm --platform linux/amd64 -v "$PWD/package.json:/app/package.json:ro" -v "$PWD/package-lock.json:/app/package-lock.json:ro" -v "$PWD/.npmrc:/app/.npmrc:ro" -w /app node:24 npm ci` — a passing macOS `npm ci` proves nothing.
- **Verify after every update**: run `npm run lint`, `npm run check:types`, and `npm run ci` (prettier + tests + build). If a major update fails verification and can't be fixed trivially, revert it and add it to `.ncurc.json`.

## Import Examples

```tsx
// Components
import { Button, Input, Modal, Table } from '@konstructio/ui';

// Theme
import { ThemeProvider, useTheme } from '@konstructio/ui';

// Utilities
import { cn } from '@konstructio/ui';

// Types
import type { ColumnDef, RowData } from '@konstructio/ui';
```

## Testing

Uses Vitest + React Testing Library + jest-axe for accessibility testing.

Test files: `ComponentName.test.tsx`

- **Follow the Testing Library philosophy**: query elements the way a real user finds them. Priority: `getByRole` with accessible name first, then `getByLabelText`, then `getByText` for static content. Never use `data-testid`, `container.querySelector`, or class-based queries unless there is genuinely no accessible query — and in that case, treat it as a signal that the component itself is missing semantics (role, label) and fix the component first.
- Interact through the interactive element (button, link, option), not through wrappers or inner nodes.
- Use the shared `renderWithProviders` helper from `@tests/utils/renderWithProviders` when a component needs QueryClient or a theme wrapper.
- Every component test file must include a jest-axe check.

## Styling Notes

- Uses Tailwind CSS v4
- Custom theme tokens defined in `lib/styles/`
- Theme-specific classes use prefixes: `kubefirst:`, `dark:`
- Always use `cn()` utility for class merging

## Git Workflow

- **Never push directly to `main`** — always create a feature branch and submit changes through a merge request.
- **Always rebase with `main`** before every push, regardless of the commit (`git fetch origin main && git rebase origin/main`). This is mandatory — never push without rebasing first.
- **Commit/PR message format**: `<emoji> <type>: <description>` — use gitmoji emojis (https://gitmoji.dev/). Examples: `✨ feat: add cluster detail page`, `🐛 fix: resolve onBlur validation`, `♻️ refactor: extract Tabs component`, `📝 docs: update CLAUDE.md rules`.

## Security

- **Postinstall scripts are disabled** via `ignore-scripts=true` in `.npmrc`. This prevents malicious code execution from compromised/unknown npm packages during install.
- After `npm install`, run `npm run setup` once to rebuild the trusted packages the project needs (currently `esbuild` for Vite's build, and `husky` for git hooks).
- Trusted-package allowlist lives in the `setup` script in `package.json`. To add a new entry, verify the package source, maintainers, and recent release history first, then extend the `setup` script — do not re-enable scripts globally.

## Coding Conventions

- **Indentation**: 2 spaces (Prettier, `useTabs: false`)
- **Comments**: do not add code comments unless strictly necessary — only to state a non-obvious constraint the code itself can't show. Never add comments that narrate what the next line does or why a change is correct. Rationale for a change (why a selector moved, why a class is prefixed, what regression it fixes) belongs in the commit message or PR description, never in the source. Default to zero new comments; if you catch yourself explaining a decision, delete the comment and put it in the commit body. This applies to CSS and stylesheet files too.
- **Quotes**: single quotes
- **Line width**: 80 characters (Prettier default)
- **TypeScript**: strict mode (`strict`, `noUnusedLocals`, `noUnusedParameters`)
- **Imports**: organized manually — external packages first, then `@/` aliases, then relative imports, separated by blank lines
- **File naming**: components in UpperCamelCase (e.g. `ClusterList.tsx`); services, lib, domain, constants, assets, modules, styles, and utils in kebab-case (e.g. `contact-center.ts`, `http-client.ts`, `node-pool.ts`)
- **Component types**: define types in a separate file named `{Component}.types.ts` (e.g. `ClusterList.types.ts` alongside `ClusterList.tsx`)
- **Component props**: type the props interface as `Props`, use `FC<Props>` (e.g. `const MyComponent: FC<Props> = ({ title }) => { ... }`)
- **Arrow functions**: always use block body with braces (e.g. `(x) => { return x + 1; }`, not `(x) => x + 1`). Exception: when returning an object literal, use parenthesized body (e.g. `() => ({ key: value })`, not `() => { return { key: value }; }`). This applies to all arrow functions including callbacks, event handlers, and component definitions.
- **Early returns**: always wrap in braces, never inline (e.g. `if (!x) { return null; }`, not `if (!x) return null;`)
- **Class names**: use the `cn()` utility (from `@konstructio/ui`) when composing class names with variables or conditionals (e.g. `className={cn('flex', isActive && 'bg-blue-500')}`). Plain static strings don't need `cn()` (e.g. `className="flex items-center"` is fine).
- **Colors**: always use colors from the civo-theme (defined in `@konstructio/ui` via `civo-theme.css`). Never use hardcoded hex values (e.g. `bg-[#016630]`); use the theme class instead (e.g. `bg-green-800`). If a color from the design has no theme equivalent, ask the user which color to use.
- **Components**: always prefer components from `@konstructio/ui` over plain HTML elements (e.g. use `<Button>` instead of `<button>`, `<Typography>` instead of `<p>`). If no library component covers the needed functionality, ask the user how to proceed.
- **Icons**: priority order: 1) icons from `@konstructio/ui/icons`, 2) project icons in `src/assets/icons/`, 3) third-party libraries like `lucide-react` as last resort.
