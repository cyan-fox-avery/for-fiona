# for Fiona 🩵

A tiny GitHub Pages reveal page for the finished **27 Things About Fiona** birthday keepsake.

The wrapper is intentionally simple: Fiona sees a addressed birthday envelope, taps **open your present**, watches a brief opening animation, and is sent to:

https://cyan-fox-avery.github.io/27-things/

## Files

- `index.html` — page structure + Open Graph/social metadata
- `style.css` — the envelope, mobile layout, and opening animation
- `script.js` — click interaction and redirect
- `preview.png` — 1200 × 630 social sharing image

## Publish on GitHub Pages

1. Create a **public** repository named `for-fiona` under `cyan-fox-avery`.
2. Put all four site files (`index.html`, `style.css`, `script.js`, `preview.png`) in the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. The site should publish at:
   `https://cyan-fox-avery.github.io/for-fiona/`

The social metadata already points to that exact URL, so if the repository name changes, update the canonical and Open Graph URLs in `index.html` too.
