# zekini.co.za

Marketing website for **Zekini CC** — a South African software studio building
production-grade Laravel applications.

## Stack

Static site — plain HTML, CSS and vanilla JS. No build step required.

```
zekini.co.za/
├── index.html        # single-page marketing site
├── css/styles.css    # styles
├── js/main.js        # nav + scroll interactions
└── assets/           # favicon and images
```

## Local preview

Open `index.html` directly, or serve the folder:

```bash
php -S localhost:8000
```

Then visit http://localhost:8000

## Deploying to Laravel Cloud

This repo is intentionally plain static so it can be deployed as-is. When wiring
up Laravel Cloud, point the site root at this repository. If a Laravel wrapper is
added later, move these files into `public/`.

## Contact form

The contact form posts to a placeholder Formspree endpoint. Replace
`action="https://formspree.io/f/your-form-id"` in `index.html` with a real
endpoint (or wire it to a backend) before going live.
