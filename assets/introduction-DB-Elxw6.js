import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BjN9cHro.js";import{b as s,c as r}from"./blocks-D3AVMGK3.js";import"./iframe-CelO_bQr.js";import"./index-fpGB5BNr.js";import"./index-poMDp_xu.js";const a=`> 🚧🚨 **Work in Progress** 🚨🚧
>
> ⚠️ This library is currently under construction. Features may change and documentation is incomplete. ⚠️

# Konstruct React Component Library

This repository contains a set of reusable and customizable React components built for **Konstruct**'s infrastructure and Kubernetes products. These components aim to streamline the development process, ensuring consistency and high-quality UI for **Kubefirst**, **Colony**, and other future projects.

## Features:

- **Reusable**: Designed to be used across different projects, reducing development time and effort.
- **Customizable**: Easily adjustable to fit specific needs or branding requirements.
- **Responsive**: Optimized for all screen sizes, ensuring a seamless experience on both desktop and mobile.
- **Accessible**: Built with accessibility in mind, following best practices to ensure compatibility with all users.
- **Tailwind CSS Integration**: Seamlessly integrated with Tailwind CSS for rapid UI development and easy theming.

## **Installation Guide**

Follow these steps to integrate \`@konstructio/ui\` into your project:

### Step 1: Install the Library

Run the following command to install the package:

\`\`\`bash
npm install @konstructio/ui
\`\`\`

---

### Step 2: Install Tailwind CSS

If you don't already have Tailwind CSS installed, follow the official installation guide from the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation). Ensure that Tailwind is properly configured in your project.

---

### Step 3: Import and Configure the Plugin

To use the components provided by \`@konstructio/ui\`, you need to import the plugin and add it to your Tailwind CSS configuration file.

Modify your Tailwind configuration file (usually \`tailwind.config.js\` or \`tailwind.config.ts\`) as follows:

\`\`\`ts
import { konstructPlugin } from '@konstructio/ui';

const config: Config = {
  plugins: [konstructPlugin],
};
\`\`\`

---

### Step 4: Include \`@konstructio/ui\` in Tailwind Content

To ensure Tailwind parses the components from \`@konstructio/ui\`, add its path to the \`content\` array in your Tailwind configuration file:

\`\`\`ts
const config: Config = {
  content: [
    // Other content paths
    './node_modules/@konstructio/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
};
\`\`\`

## Final Steps

After completing the above steps, you can now use \`@konstructio/ui\` components in your project. Restart your development server to apply the changes.
`;function o(t){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Documentation/Introduction"}),`
`,n.jsx(r,{children:a})]})}function f(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o()}export{f as default};
