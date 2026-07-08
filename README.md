# zekini.co.za

Marketing website for **Zekini CC** — a South African software studio building
production-grade Laravel applications.

## Stack

Static site — plain HTML, CSS and vanilla JS. No build step required.

```
zekini.co.za/
├── public/               # deployed static assets
│   ├── index.html        # single-page marketing site
│   ├── css/styles.css    # styles
│   ├── js/main.js        # nav + scroll interactions
│   └── assets/           # favicon and images
└── wrangler.jsonc        # Cloudflare Workers static-assets config
```

## Local preview

Serve the `public/` folder:

```bash
php -S localhost:8000 -t public
```

Then visit http://localhost:8000

## Deploying to Cloudflare Workers

The site deploys as a Cloudflare Workers static-assets project. `wrangler.jsonc`
points the `assets.directory` at `public/`, so no build step is needed.

In the Cloudflare Workers & Pages build settings for this repo:

- **Build command:** _None_
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** `/`

`wrangler deploy` reads `wrangler.jsonc` and uploads everything under `public/`.
Deploy locally the same way with `npx wrangler deploy`.

## Contact

Contact is WhatsApp-only — a `wa.me/27762799254` link with a pre-filled message,
plus a floating WhatsApp button on every page. No form backend and no email
address in the page source, so there's nothing to spam or harvest. To change the
number, edit the `wa.me/…` links in `public/index.html`.
