# Docs Starter Template

Static documentation site template for Enfono projects. Served via Server Manager Docs Hub (Caddy + git auto-deploy).

## Quick Start

1. Click **"Use this template"** on GitHub to create a new repo under `EnfonoTech/`.
2. Clone your new repo locally.
3. Edit `index.html` — update the sidebar `<title>` and nav links.
4. Add pages under `pages/` as `.html` files.
5. Push to the configured branch. Site auto-deploys at `{repo-name}.docs.enfonoerp.com`.

## File Structure

```
├── CLAUDE.md           # Instructions for Claude to maintain this site
├── index.html          # Landing page with sidebar navigation
├── README.md           # This file
├── css/
│   └── style.css       # Enfono docs theme (sidebar #1a1a2e, accent #e94560)
├── js/
│   └── nav.js          # Active nav highlighting + sidebar search
└── pages/
    ├── getting-started.html
    ├── installation.html
    ├── configuration.html
    └── deployment.html
```

## Using Claude to Maintain This Site

Claude reads `CLAUDE.md` for instructions. Tell Claude:

> "Add a new page about [topic] to the docs site. Create `pages/[topic].html` and link it from the sidebar in `index.html`."

Claude will follow the Frappe/ERPNext v15 patterns and Enfono brand guidelines.

## Customization

- **Colors**: Edit CSS variables in `css/style.css` (`:root` block).
- **Sidebar links**: Edit the `<ul class="nav-list">` in `index.html`.
- **Favicon**: Add a `favicon.ico` to the repo root and link it in `<head>`.

## Deployment

Every push to the configured branch triggers auto-deploy via Server Manager Docs Hub. The site is served by Caddy with automatic SSL at `{repo-name}.docs.enfonoerp.com`.
