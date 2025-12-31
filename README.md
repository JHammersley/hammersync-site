# HammerSync Ltd. Static Website

## Quick start (local preview)
Because this is a static site, you can open `index.html` directly in a browser.
For best results (links + fetch), run a simple local server:

### Option A: Python
```bash
python -m http.server 8080
```
Then browse: http://localhost:8080

### Option B: VS Code Live Server extension
Open the folder and click "Go Live".

## Contact form
Edit `assets/js/contact.js` and replace:
`https://formspree.io/f/YOUR_FORM_ID`
with your Formspree endpoint.

## Deploy
This works on Azure Static Web Apps, Cloudflare Pages, or Vercel.
Keep the domain at Namecheap and point DNS to your host.
