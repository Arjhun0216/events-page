# PHANTASM — CSE Symposium 2026

React 19 + Vite 7 + Tailwind CSS 4 + React Router 7

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Adding your real hero artwork

The Hero section currently uses a CSS/SVG placeholder glow scene (no image
needed) so the project runs immediately. To use your actual dragon/phoenix
artwork:

1. Save your image as `public/assets/hero-bg.jpg`
2. Open `src/components/Hero.jsx`
3. Uncomment the `<img>` block under "OPTION A"
4. Optionally remove/comment the "OPTION B" placeholder div block below it

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    CountdownTimer.jsx
    StarField.jsx
  pages/
    Home.jsx
    Events.jsx
    Schedule.jsx   
    Contact.jsx
  App.jsx
  main.jsx
  index.css          
```

## Changing the countdown date

Edit `TARGET_DATE` in `src/components/CountdownTimer.jsx`.

## Build for production

```bash
npm run build
npm run preview
```
