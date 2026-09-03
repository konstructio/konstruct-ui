import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{A as t,a as n,j as r,o as i,s as a}from"./blocks-CKdFq8zI.js";import{t as o}from"./jsx-runtime-BdxMnOeJ.js";var s;function c(){return(c=e((()=>{s=`# @konstructio/ui

[![npm version](https://img.shields.io/npm/v/@konstructio/ui.svg)](https://www.npmjs.com/package/@konstructio/ui)
[![license](https://img.shields.io/npm/l/@konstructio/ui.svg)](./LICENSE.md)
[![Storybook](https://img.shields.io/badge/docs-storybook-ff4785.svg)](https://konstructio.github.io/konstruct-ui)

A React component library for [Konstruct](https://konstruct.io) infrastructure products (Kubefirst, Colony) and the Civo dashboard. Built with React, TypeScript, Tailwind CSS v4, and Radix UI primitives.

> **Note**: This library is in active development (alpha). APIs may change between releases.

## Features

- **40+ components** — forms, tables, modals, charts, navigation, and more
- **Accessible** — built on Radix UI primitives, tested with jest-axe
- **Themeable** — light, dark, and brand themes switchable at runtime
- **Tree-shakeable** — ESM build with component-level code splitting
- **Broad React support** — compatible with React 16.8+, 17, 18, and 19

## Requirements

| Peer dependency         | Version                    |
| ----------------------- | -------------------------- |
| \`react\` / \`react-dom\`   | \`^16.8 \\|\\| ^17 \\|\\| ^18 \\|\\| ^19\` |
| \`tailwindcss\`           | \`^4\`                       |
| \`@tanstack/react-query\` | \`^5.90\`                    |
| \`react-router-dom\`      | \`^7\`                       |

## Installation

\`\`\`bash
npm install @konstructio/ui
\`\`\`

## Setup

### 1. Import the styles

In your global CSS file, import Tailwind, the library theme, and the brand theme you need:

\`\`\`css
@import 'tailwindcss';

@import '@konstructio/ui/ui/theme.css';
@import '@konstructio/ui/ui/civo-theme.css'; /* or kubefirst-theme.css */
@import '@konstructio/ui/ui/utilities.css';
\`\`\`

Component styles are bundled with the components and injected automatically — no extra CSS import is needed.

### 2. Register the package with Tailwind

Add the package to Tailwind's source detection so it generates the utility classes used by the components. The path is relative to your CSS file:

\`\`\`css
@source '../node_modules/@konstructio/ui/dist';
\`\`\`

### 3. Wrap your app in the theme provider

\`\`\`tsx
import { ThemeProvider } from '@konstructio/ui';

const App = () => {
  return (
    <ThemeProvider theme="light">
      <YourApp />
    </ThemeProvider>
  );
};
\`\`\`

## Usage

\`\`\`tsx
import { Alert, Button, Input, Modal, Typography } from '@konstructio/ui';

const Example = () => {
  return (
    <form>
      <Typography variant="h3">Create instance</Typography>
      <Input label="Hostname" isRequired helperText="Must be unique" />
      <Button variant="primary" type="submit">
        Create
      </Button>
    </form>
  );
};
\`\`\`

Icons ship as a separate entry point:

\`\`\`tsx
import { AlertOutlineIcon, InfoCircleIcon } from '@konstructio/ui/icons';
\`\`\`

Utilities such as the \`cn\` class-merging helper are exported from the root:

\`\`\`tsx
import { cn } from '@konstructio/ui';

<div className={cn('flex items-center', isActive && 'bg-primary')} />;
\`\`\`

## Theming

Four themes are available: \`light\` (default styling), \`dark\`, \`kubefirst\`, and \`kubefirst-dark\`. The active theme is applied through the \`data-theme\` attribute on \`<body>\` and persisted in a cookie.

Switch themes at runtime with the \`useTheme\` hook:

\`\`\`tsx
import { useTheme } from '@konstructio/ui';

const { theme, setTheme } = useTheme();
setTheme('dark');
\`\`\`

Alternatively, set \`data-theme\` directly on the document root — useful when the theme is controlled by a host application, such as a micro-frontend shell:

\`\`\`html
<html data-theme="dark"></html>
\`\`\`

## Components

| Category     | Components                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Forms        | Input, TextArea, Select, Checkbox, Switch, Radio, RadioGroup, RadioCard, Counter, Datepicker, TimePicker, PhoneNumberInput, Range, Slider, Autocomplete, Filter, TagSelect, MultiSelectDropdown, ImageUpload |
| UI           | Button, Badge, Card, CopyButton, Alert, AlertDialog, Modal, Breadcrumb, Divider, Tag, Tooltip, Toast, Tabs, Typography                                                                                       |
| Data display | Table, VirtualizedTable, PieChart, ProgressBar, Loading, Spinner                                                                                                                                             |
| Layout       | Sidebar                                                                                                                                                                                                      |
| Other        | DropdownButton, Command                                                                                                                                                                                      |

Full documentation with live examples is available in the [Storybook](https://konstructio.github.io/konstruct-ui).

## Development

\`\`\`bash
npm install && npm run setup   # install dependencies and rebuild trusted packages
npm run storybook              # dev server on http://localhost:6006
npm run test                   # run tests with coverage
npm run lint                   # lint
npm run check:types            # type check
npm run build                  # production build
npm run ci                     # full CI pipeline
\`\`\`

## License

[MIT](./LICENSE.md)
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`Documentation/Introduction`}),`
`,(0,d.jsx)(n,{children:s})]})}function u(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=o(),t(),a(),c()})))()}f();export{u as default};