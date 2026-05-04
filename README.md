# 🧱 Tiles Gallery

A modern web application to discover, browse, and explore premium tile collections. Built with Next.js, BetterAuth, and MongoDB.

## 🌐 Live URL

https://tiles-gallery-six.vercel.app

---

## 🎯 Purpose

Tiles Gallery is a full-stack tile showcase platform where users can browse a curated collection of tiles, view detailed information about each tile, and manage their personal profile — all within a secure, authenticated experience.

---

## ✨ Key Features

- 🏠 **Home Page** — Hero banner with "Discover Your Perfect Aesthetic" CTA, a scrolling marquee of new arrivals, and a featured tiles section showcasing top 4 tiles
- 🖼️ **All Tiles Gallery** — Search tiles by title with a live search bar; browse all tiles in a responsive card grid
- 🔍 **Tile Details Page** — High-res tile preview with full info: title, creator, style description, material, dimensions, price, and tags
- 🔐 **Authentication** — Email/password login & registration + Google OAuth, powered by BetterAuth with MongoDB adapter
- 👤 **My Profile** — View and update your display name and profile image URL
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🔒 **Protected Routes** — `/tile/[id]` and `/my-profile` are accessible only to logged-in users
- 🔄 **Loading States** — Skeleton/spinner shown during all data fetching
- 🚫 **Custom 404 Page** — Friendly not-found page for invalid routes

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | App framework (App Router) |
| `better-auth` | Authentication (email + Google OAuth) |
| `mongodb` | MongoDB database adapter |
| `heroui` | UI component library |
| `react-icons` | Icon set (login, logout, register icons) |
| `animate.css` | Animation on Banner |
| `react-toastify` | Toast notifications for feedback |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind component plugin |

---