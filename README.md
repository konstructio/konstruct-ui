> 🚧🚨 **Work in Progress** 🚨🚧
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

Follow these steps to integrate `@konstructio/ui` into your project:

### Step 1: Install the Library

Run the following command to install the package:

```bash
npm install @konstructio/ui
```

---

### Step 2: Install Tailwind CSS v4

Tailwind CSS v4 is a peer dependency. If you don't already have it installed, follow the official [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

---

### Step 3: Import the theme styles

In your global CSS file, import Tailwind and the library theme, plus the brand theme you need:

```css
@import 'tailwindcss';
@import '@konstructio/ui/ui/theme.css';
@import '@konstructio/ui/ui/utilities.css';
@import '@konstructio/ui/ui/civo-theme.css'; /* or kubefirst-theme.css */
```

Component styles are bundled with the components and injected automatically — no extra CSS import is needed.

---

### Step 4: Include `@konstructio/ui` in Tailwind's source detection

So Tailwind generates the utility classes used by the components, add the package to your global CSS with `@source` (the path is relative to your CSS file):

```css
@source '../node_modules/@konstructio/ui/dist';
```

## Final Steps

After completing the above steps, you can now use `@konstructio/ui` components in your project. Restart your development server to apply the changes.
