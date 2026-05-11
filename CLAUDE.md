# Docs Site — Claude instructions

You maintain this documentation site. It is served at `{SITENAME}.docs.enfonoerp.com` via Caddy (auto-SSL, auto-deploy on git push).

## Rules

1. Every change is a git commit + push. Site auto-deploys on push to the configured branch.
2. Keep `index.html` as the landing page with sidebar navigation. Update nav links when adding pages.
3. New pages go in `pages/` folder as `.html` files. Link them from the sidebar nav in `index.html`.
4. Use Enfono brand colors defined in `css/style.css`: sidebar `#1a1a2e`, accent `#e94560`, system fonts.
5. Keep content actionable — step-by-step guides, not walls of text. Use headings, code blocks, and tables for clarity.
6. For Frappe/ERPNext topics: follow ERPNext v15 patterns. Query frappe-brain corpus for accurate field names, hook signatures, and DocType structures before writing.
7. Every page should have a clear `<h1>` title and be self-contained enough to be useful on its own.
8. Link between related pages using relative paths (e.g., `pages/installation.html`).
