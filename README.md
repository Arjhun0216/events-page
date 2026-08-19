# PHANTASM CSE Symposium — Contact Us

React 19 + Vite 7 + Tailwind CSS 4 + React Router 7.

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What's wired up

- **PARTICIPATE** is a plain external link (opens in a new tab). Update the URL in
  `src/components/ContactUsPage.jsx`:
  ```js
  const PARTICIPATE_URL = "https://forms.gle/your-registration-form";
  ```
- **FOLLOW US** icons (Instagram, LinkedIn, YouTube) open in new tabs. Update the URLs in
  `src/components/ContactUsPage.jsx` under the `socialLinks` object with your real handles:
  ```js
  const socialLinks = {
    instagram: "https://www.instagram.com/your-handle",
    linkedin: "https://www.linkedin.com/company/your-page",
    youtube: "https://www.youtube.com/@your-channel",
  };
  ```
- **FIND US HERE** shows a live embedded Google Map for "Government College of Engineering,
  Bargur, Krishnagiri". Both the map card and "OPEN IN GOOGLE MAPS" button link to Google Maps
  search results for that location.

## Project structure

```
src/
  components/
    ContactUsPage.jsx    <- main Contact Us page
  App.jsx                 <- React Router routes (single route for now)
  main.jsx                <- app entry point (BrowserRouter)
  index.css               <- Tailwind v4 import
index.html
vite.config.js             <- Vite + @tailwindcss/vite plugin
package.json
```

Note: Tailwind CSS 4 doesn't need a `tailwind.config.js` — it's wired directly via the
`@tailwindcss/vite` plugin and `@import "tailwindcss";` in `index.css`.
