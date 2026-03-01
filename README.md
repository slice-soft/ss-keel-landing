# ss-keel-landing

Landing page for [keel-go.dev](https://keel-go.dev) — the main website for the Keel framework.

[![CI](https://github.com/slice-soft/ss-keel-landing/actions/workflows/ci.yml/badge.svg)](https://github.com/slice-soft/ss-keel-landing/actions)
![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Made in Colombia](https://img.shields.io/badge/Made%20in-Colombia-FCD116?labelColor=003893)

---

## Stack

- **[Astro](https://astro.build)** — static site generation
- No JS frameworks — scoped HTML + CSS per component

---

## Local Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

---

## Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base: meta tags, SEO, design system CDN, anti-FOUC
├── components/
│   ├── Nav.astro             # Navbar with theme toggle and links
│   ├── Hero.astro            # Hero section with code examples
│   ├── Features.astro        # 4 framework pillars
│   ├── Architecture.astro    # Module→Controller→Service→Repository diagram
│   ├── Addons.astro          # Addon ecosystem grid
│   ├── CLI.astro             # keel CLI demo terminal
│   ├── CTA.astro             # Final call to action
│   └── Footer.astro          # Footer with links
└── pages/
    └── index.astro           # Main page
```

---

## Build

```bash
npm run build     # Outputs to dist/
npm run preview   # Preview the build locally
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for repository-specific rules.
The base workflow, commit conventions, and community standards live in [ss-community](https://github.com/slice-soft/ss-community/blob/main/CONTRIBUTING.md).

## Community

| Document | |
|---|---|
| [CONTRIBUTING.md](https://github.com/slice-soft/ss-community/blob/main/CONTRIBUTING.md) | Workflow, commit conventions, and PR guidelines |
| [GOVERNANCE.md](https://github.com/slice-soft/ss-community/blob/main/GOVERNANCE.md) | Decision-making, roles, and release process |
| [CODE_OF_CONDUCT.md](https://github.com/slice-soft/ss-community/blob/main/CODE_OF_CONDUCT.md) | Community standards |
| [SECURITY.md](https://github.com/slice-soft/ss-community/blob/main/SECURITY.md) | How to report vulnerabilities |
