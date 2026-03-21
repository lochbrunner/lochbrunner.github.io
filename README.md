# matthias-lochbrunner.github.io

Personal website of Matthias Lochbrunner, Research Engineer at Google DeepMind.

Built with **React 19** + **TypeScript** + **Vite 6**.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [npm](https://www.npmjs.com/) (bundled with Node.js)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Vite will start a local development server (default: [http://localhost:5173](http://localhost:5173)) with hot module replacement (HMR) enabled.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check with `tsc` and build for production (output in `out/`) |
| `npm run preview` | Locally preview the production build |

---

## Project Structure

```
.
├── data/               # YAML data files (projects, publications, etc.)
├── src/                # React + TypeScript source code
│   └── main.tsx        # App entry point
├── public/             # Static assets served as-is
├── chop/               # Self-contained sub-app (served at /chop)
├── legacy/             # Archived Next.js site (served at /legacy)
├── index.html          # HTML entry point for Vite
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

### Notable Vite plugins

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) — Fast Refresh for React
- [`@modyfi/vite-plugin-yaml`](https://github.com/Modyfi/vite-plugin-yaml) — Import `.yaml` files directly as JS modules
- [`vite-plugin-static-copy`](https://github.com/sapphi-red/vite-plugin-static-copy) — Copies `chop/` and `legacy/out/` into the build output and serves them at `/chop` and `/legacy` during development

---

## Sub-apps

Two self-contained sub-applications are embedded at fixed routes:

| Route | Source | Description |
|-------|--------|-------------|
| `/chop` | `chop/` | Chop language compiler (Rust + WebAssembly) |
| `/legacy` | `legacy/out/` | Archived Next.js personal site |

Both are served automatically during `npm run dev` and copied into `out/` during `npm run build`.
If you update the legacy site, rebuild it first with `cd legacy && npm run build`.

---

## Building for Production

```bash
npm run build
```

The compiled output is written to the `out/` directory. To preview it locally before deploying:

```bash
npm run preview
```

---

## Deployment

This site is hosted via **GitHub Pages** (repository: `lochbrunner/lochbrunner.github.io`). The contents of the `out/` directory are deployed on every push to the main branch via the GitHub Actions workflow in `.github/`.
