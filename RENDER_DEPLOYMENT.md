# Render Deployment (Deliverable 3)

## Build settings

- **Service type:** Static Site
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Steps

1. Push this folder to a GitHub repo named `{firstname}-{lastname}-project2`.
2. In Render, choose **New +** → **Static Site** and connect your repo.
3. Set build and publish values above, then deploy.
4. Confirm the app opens and route refresh works:
   - `/`
   - `/games`
   - `/games/easy`
   - `/games/normal`
   - `/rules`, `/scores`, `/login`, `/register`

## SPA routing fix

- This project includes `public/_redirects`:

`/* /index.html 200`

This handles React Router refresh/deep links on Render.
