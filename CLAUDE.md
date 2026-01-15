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

## Styling Notes

- Uses Tailwind CSS v4
- Custom theme tokens defined in `lib/styles/`
- Theme-specific classes use prefixes: `kubefirst:`, `dark:`
- Always use `cn()` utility for class merging
