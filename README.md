This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🌩️ Atmosphere | Weather Intelligence

Atmosphere is a premium, glassmorphic weather tracking application built to provide real-time atmospheric insights with a focus on fluid user experience and modern design aesthetics. This project was developed as part of a Frontend Intern Task.

---

## 🔗 Project Links
* **Live Demo:** [Insert Vercel URL Here]

* **GitHub Repository:** [Weather Dashboard](https://github.com/Sailesh-Singh/weather-dashboard)

---

## Features

### Page 1: Introduction (Landing)
* **Staggered Animations:** A smooth, multi-stage entry animation for hero text and components using Framer Motion.
* **Glassmorphic UI:** Deep backgrounds with frosted-glass components and glow effects.
* **Interactive Experience Indicator:** A custom-animated scroll indicator to guide users.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.

### Page 2: Weather Dashboard (Dynamic Data)
* **Real-time Data Fetching:** Integrates with the OpenWeatherMap API to provide live temperature, humidity, wind speed, and conditions.
* **Skeleton Loaders:** Professional loading states that mirror the final layout to reduce perceived latency.
* **Error Handling:** Graceful UI states for "City Not Found" or network failures.
* **Dynamic Visuals:** Condition-based emojis and themed gradients that change based on weather data.



## Tech Stack
* **Framework:** Next.js 
* **Styling:** Tailwind CSS 
* **Animations:** Framer Motion (Physics-based transitions)
* **Icons:** Lucide React (Consistent, light-weight icons)
* **Language:** TypeScript 
* **Deployment:** Vercel

---

## 📐 Design Decisions
1. **Glassmorphism:** Chosen to symbolize the "Atmosphere"—clear, airy, and layered.
2. **Color Palette:** Dark `slate-950` base to make weather accents pop with high contrast.
3. **UX Logic:** Skeleton loaders were prioritized over simple spinners to maintain layout stability during asynchronous data fetching.



## Installation & Setup
1. **Clone & Install:** `git clone` then `npm install`
2. **API Key:** Add `NEXT_PUBLIC_WEATHER_API_KEY` to `.env.local`
3. **Run:** `npm run dev`

---

## Challenges & Solutions
* **Challenge:** Handling inconsistent API response times. 
* **Solution:** Implemented `AnimatePresence` from Framer Motion for smooth exits for loading states.