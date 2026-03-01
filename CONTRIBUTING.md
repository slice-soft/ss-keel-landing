# Contributing to ss-keel-landing

This repository contains only the static website for [keel-go.dev](https://keel-go.dev). The rules here are specific to content, design, and site structure changes.

For the general commit flow, PR process, and governance, see the [ss-community CONTRIBUTING.md](https://github.com/slice-soft/ss-community/blob/main/CONTRIBUTING.md).

---

## Local Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the build
```

---

## What PRs are accepted

### Accepted

- Text corrections, typos, or outdated information
- Accessibility improvements (aria attributes, contrast, semantic structure)
- Layout or style adjustments that maintain consistency with the design system
- New sections or components proposed with a prior issue
- Broken link fixes or incorrect references

### Not accepted

- Changes that replace CDN design tokens (`--color-primary`, `--ss-bg`, etc.) with hardcoded values
- Introduction of JS frameworks (React, Vue, Svelte, etc.) — the site is plain Astro with no client-side JS unless strictly necessary
- Content changes that alter Keel's value proposition without prior alignment with the maintainer
- PRs that mix design changes with content changes

---

## Component Structure

Each landing section is a standalone component in `src/components/`. When adding new content:

- Create a new component rather than expanding an existing one
- Import and use the component in `src/pages/index.astro`
- Keep styles scoped inside the component (`<style>` in Astro)

---

## Commit Conventions

Follow Conventional Commits. Useful scopes for this repo:

```
feat: add animated background
fix: correct mobile breakpoint
content: update addon list with new releases
style: adjust link spacing
chore: update astro to 5.18
```

---

## Accessibility

- Use semantic elements (`<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`)
- Add `aria-label` to interactive elements without visible text
- Decorative SVGs must have `aria-hidden="true"`
- Text contrast must meet WCAG AA minimum

---

*SliceSoft — Colombia 💙*
