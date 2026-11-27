# Stephen Ramlogan & Co. (concept website)

Free concept site by Portside Digital for a San Fernando law firm. Static HTML/CSS/JS, no WordPress.

- Edit content in `_build/data.mjs` (firm facts, practice areas) and `_build/pages.mjs` (page bodies).
- Rebuild every page (shared header/footer partials are injected at build time): `node _build/build.mjs`
- Facts used come from the firm's public directory listing; items marked "to be confirmed" need the firm's input.
