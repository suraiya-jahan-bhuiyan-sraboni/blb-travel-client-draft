# BLB Travels Client

A modern, scalable travel booking platform built with **Next.js 15+**, **Tailwind CSS v4**, and **Zustand**.

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/postcss`)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

The project follows a **Feature-Based Architecture**, where logic is encapsulated within specific feature folders to ensure scalability and maintainability.

```text
src/
├── app/              # Next.js App Router (Layouts, Pages, API Routes)
├── features/         # Feature-specific logic (Components, Hooks, APIs)
│   ├── auth/         # Authentication flow
│   ├── gallery/      # Image/Media gallery
│   ├── home/         # Homepage sections
│   └── offers/       # Travel offers & promotions
├── services/         # Global API configuration & endpoint definitions
├── store/            # Global State Management (Zustand stores)
├── styles/           # Tailwind configuration & global CSS
├── hooks/            # Shared custom React hooks
├── lib/              # Third-party library initializations (Axios, Query Client)
├── types/            # Global TypeScript interfaces & types
├── utils/            # Shared utility functions
└── constants/        # Application constants, routes & config
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your configuration.

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🏗️ Core Architecture Concepts

### 1. Feature-Based Organization
Instead of grouping files by type (e.g., all components in one folder), we group by **domain**. Each folder in `src/features` should contain its own components, hooks, and API logic. This makes it easier to find code and remove features if needed.

### 2. State Management (Zustand)
Global state is managed using small, atomic stores in `src/store/`. These are optimized for performance and type-safety.

### 3. Tailwind CSS v4
The project uses the latest **Tailwind v4** architecture.
- Main entry point: `src/app/globals.css`
- Component styles: `src/styles/tailwind.css` (imported into `globals.css`)
- **Note**: Always use `@import "tailwindcss";` at the top of your CSS files if using `@apply`.

---

## 📜 Coding Guidelines

- **Components**: Prefer Function Components with TypeScript.
- **Naming**: Use PascalCase for components and camelCase for hooks/functions.
- **Styling**: Stick to Tailwind utility classes. Use `@apply` sparingly for highly repetitive component patterns.
- **Types**: Always define interfaces in `src/types/` or locally within features if specific to that domain.

---

## 📄 License
Private project. All rights reserved.
