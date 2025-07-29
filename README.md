# MzansiVPN 🇿🇦

> A sleek, modern VPN client application built with React, TypeScript, and Tailwind CSS. Features a secure client interface and a comprehensive admin dashboard for user analytics.

*Note: You can add screenshots to a `docs` folder and uncomment the lines below to display them.*
<!-- ![MzansiVPN Login Page](./docs/screenshot-login.png) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vercel Deployment](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)](https://vercel.com)

---

## ✨ Key Features

-   **Secure VPN Client**: Connect to various global servers with a single click.
-   **Interactive World Map**: Visualize your connection path on a dynamic map.
-   **Real-time Status**: Monitor connection status, duration, and your new IP address.
-   **Multi-Server Selection**: Choose from a list of pre-configured server locations.
-   **Admin Analytics Dashboard**: (Admin users only) View detailed user session data, including data usage, session duration, and country.
-   **Secure Authentication**: Robust login flow with simulated Two-Factor Authentication (2FA).
-   **Responsive Design**: A seamless experience across desktop and mobile devices.
-   **Modern Tech Stack**: Built with React and TypeScript for a type-safe, component-based architecture.

---

## 🚀 Tech Stack

-   **Frontend:** [React](https://reactjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** Custom SVG components
-   **Module Loading:** [ESM Modules via esm.sh](https://esm.sh/) (No build step required for development)

---

## 📂 Project Structure

The project is organized into a clean and maintainable structure.

```
/
├── components/         # Reusable React components
│   ├── AdminAnalyticsPage.tsx
│   ├── Header.tsx
│   ├── IconComponents.tsx
│   ├── LoginPage.tsx
│   ├── MainApp.tsx
│   ├── Sidebar.tsx
│   ├── VpnClientPage.tsx
│   └── VpnWidget.tsx
├── constants.ts        # Global constants (servers, user data)
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application entry component
├── index.html          # HTML entry point
├── index.tsx           # React root renderer
├── metadata.json       # Application metadata
└── README.md           # This file
```

---

## 🏁 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [Git](https://git-scm.com/)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder-name>
    ```

2.  **Install a local server:**
    This project uses modern ESM modules directly in the browser and doesn't require a complex build setup like Webpack or Vite for development. You just need a simple local server to serve the `index.html` file.

    We recommend using `serve`. If you don't have it, install it globally:
    ```bash
    npm install -g serve
    ```

3.  **Run the application:**
    From the root of the project directory, run:
    ```bash
    serve -s .
    ```
    The `-s` flag ensures that all requests are redirected to `index.html`, which is important for projects with client-side state/views that don't rely on server-side routing.

4.  **Open in your browser:**
    The server will typically start on `http://localhost:3000`. Open this URL in your browser to see the application running.

*Note: For admin access, the logic is hardcoded for demonstration purposes. Check the `LoginPage.tsx` component to see the admin email address.*

---

## 📦 Deployment

This application is configured for a zero-configuration deployment on [Vercel](https://vercel.com).

1.  **Push to GitHub:**
    Ensure your latest code is pushed to your own GitHub repository.

2.  **Import Project on Vercel:**
    -   Log in to your Vercel account.
    -   Click "Add New..." -> "Project".
    -   Import your GitHub repository.
    -   Vercel will automatically detect that it's a static site. It should default to the "Other" framework preset.

3.  **Configure Settings (if needed):**
    -   **Framework Preset**: `Other`
    -   **Root Directory**: Should be `./`.
    -   **Build Command**: Leave this empty.
    -   **Output Directory**: Leave this empty.
    -   **Install Command**: Leave this empty.

4.  **Deploy:**
    Click the "Deploy" button. Vercel will deploy your site and provide you with a live URL.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
