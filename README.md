# MzansiVPN 🇿🇦

A sleek, modern VPN client application with an admin dashboard for user analytics.

## Live Application URL

You can view the live application here: [https://mzansi-vpn.vercel.app/](https://mzansi-vpn.vercel.app/)

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


## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
