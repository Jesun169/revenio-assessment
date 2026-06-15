# ProductHub

A modern and responsive product management platform built with **Next.js App Router**, **Firebase Authentication**, and **Tailwind CSS**. ProductHub allows users to browse products, view detailed information, and securely manage products through protected routes.

## 🌐 Live Demo

https://producthub-snowy.vercel.app/

---

# 📖 Project Overview

ProductHub is designed to demonstrate modern frontend development practices using Next.js and Firebase. The application includes public and protected pages, user authentication, product browsing, product management, and a polished responsive user interface.

The project focuses on:

- Clean and professional UI/UX
- Responsive design across all devices
- Firebase Authentication
- Protected Routes
- Dynamic Routing with Next.js App Router
- Reusable Components
- Modern Layout Structure

---

# ✨ Key Features

## Authentication & Security

- User Registration with Email & Password
- User Login with Firebase Authentication
- Google Login Support
- Protected Routes
- Logout Functionality
- User Information Dropdown Menu

## Product Management

- Browse Products
- Product Search Functionality
- Category Filtering
- Dynamic Product Details Page
- Add Product (Protected)
- Manage Products (Protected)
- View Product Information

## User Interface

- Modern Sticky Navigation Bar
- Attractive Hero Section
- Responsive Product Grid
- Interactive Hover Effects
- Professional Footer
- FAQ Section
- Contact Page
- About Page
- Mobile-Friendly Design

---

# 🛠️ Technologies Used

### Frontend

- Next.js 15 (App Router)
- React.js
- Tailwind CSS

### Authentication

- Firebase Authentication

### Deployment

- Vercel

### Development Tools

- JavaScript (ES6+)
- Git & GitHub

---

# 📂 Route Summary

## Public Routes

| Route | Description |
|---------|-------------|
| `/` | Home Page |
| `/items` | Browse All Products |
| `/items/[id]` | Product Details Page |
| `/about` | About ProductHub |
| `/contact` | Contact Page |
| `/faq` | Frequently Asked Questions |
| `/login` | User Login |
| `/register` | User Registration |

---

## Protected Routes

| Route | Description |
|---------|-------------|
| `/items/add` | Add New Product |
| `/items/manage` | Manage Products |

---

# 📁 Project Structure

```bash
app
├── about
├── contact
├── faq
├── items
│   ├── [id]
│   ├── add
│   └── manage
├── login
├── register
├── layout.jsx
└── page.jsx

components
├── Hero.jsx
├── Navbar.jsx
├── Footer.jsx
├── Features.jsx
├── FeatureProducts.jsx
├── Testimonials.jsx
├── WhyChooseUs.jsx
├── Newsletter.jsx
└── ProtectedRoute.jsx

context
└── AuthContext.jsx

firebase
└── firebase.config.js

data
└── products.js
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Jesun169/revenio-assessment.git
```

## Navigate to Project Folder

```bash
cd producthub
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🚀 Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

# 🎯 Assessment Requirements Covered

✅ Next.js App Router

✅ Firebase Authentication

✅ Responsive Navbar

✅ Hero Section

✅ 4 Additional Homepage Sections

✅ Product Listing Page

✅ Search Functionality

✅ Filtering Functionality

✅ Dynamic Product Details Page

✅ About Page

✅ Contact Page

✅ FAQ Page

✅ Protected Add Product Page

✅ Protected Manage Product Page

✅ Responsive Design

✅ Professional UI/UX

---

# 👨‍💻 Developer

**Jesan Biswas**

Frontend Developer

- Next.js
- React.js
- Firebase
- Tailwind CSS

---

# 📄 License

This project was developed for the **Revenio Next.js Assessment Task** and is intended for educational and evaluation purposes.