# 🖥️ PCTRAXERS — PC Components & Gaming Hardware Store

A modern React-based e-commerce platform for gaming PCs, components, and peripherals. Browse products, build custom configurations, and manage your cart with an intuitive interface.

![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)
![React Router](https://img.shields.io/badge/React_Router-7.13-ca4245?style=flat-square&logo=react-router)

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| **Catalog** | Browse products by category — Sale, Hot, Stock |
| **Product Details** | Full specs, reviews, and pricing for each item |
| **Components** | Individual PC components (GPUs, CPUs, coolers, etc.) |
| **Ready Builds** | Pre-configured gaming PC setups |
| **PC Configurator** | Build your custom PC — select processor, motherboard, GPU, RAM, case, storage, PSU, and peripherals |
| **Cart** | Add to cart, manage quantity, proceed to checkout |
| **Specifications** | Detailed technical specs for every product |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-app

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

Creates an optimized build in the `build` folder, ready for deployment.

---

## 📁 Project Structure

```
my-app/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetailCard.jsx
│   │   ├── CartIcon.jsx
│   │   └── BrandsSection.jsx
│   ├── hooks/        # Custom React hooks
│   │   └── useCartCount.js
│   ├── pages/        # Page components
│   │   ├── Catalog.js
│   │   ├── ProductPage.js
│   │   ├── Cart.jsx
│   │   ├── Configurator
│   │   └── ...
│   ├── utils/        # Utilities
│   │   └── specNames.js
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🛣️ Routes

| Path | Description |
|------|-------------|
| `/` | Redirects to catalog |
| `/catalog` | Product catalog |
| `/product/:id` | Product details |
| `/specifications/:id` | Full specifications |
| `/components` | PC components list |
| `/builds` | Ready PC builds |
| `/configurator` | Custom PC builder |
| `/select/:componentType` | Component selection |
| `/cart` | Shopping cart |

---

## 🛠️ Tech Stack

- **React 19** — UI library
- **React Router 7** — Client-side routing
- **LocalStorage** — Cart & configurator data persistence

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |

---

## 🌐 Deployment

The project is ready for deployment on **Vercel**, **Netlify**, or any static hosting platform.

For Vercel: push to GitHub and connect your repo — the build runs automatically.

---

## © PCTRAXERS

Gaming hardware for enthusiasts.
