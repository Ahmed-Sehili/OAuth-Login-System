# OAuth Login System 🔐

A modern authentication system built with [Next.js](https://nextjs.org/), [Clerk](https://clerk.com/), and [Tailwind CSS](https://tailwindcss.com/). Securely authenticate users using OAuth providers with a beautiful, responsive UI.

## Features ✨

- 🔑 OAuth authentication with Clerk (Google, GitHub, etc.)
- 📝 Secure sign up, sign in, and sign out flows
- 🛡️ Protected dashboard for authenticated users
- 📱 Responsive, modern UI with Tailwind CSS
- 🌈 Animated gradient backgrounds and custom theming
- 👤 User profile display (name, email, avatar)

## Technologies Used 🛠️

- [Next.js 15](https://nextjs.org/) ⚡
- [React 19](https://react.dev/) ⚛️
- [Clerk](https://clerk.com/) for authentication 🔐
- [Tailwind CSS 4](https://tailwindcss.com/) and plugins 🎨
- TypeScript 📝

## Project Structure 🗂️

```text
.
├── .env.example           # Example environment variables
├── package.json           # Project metadata and dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.ts         # Next.js configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout and metadata
│   │   ├── page.tsx       # Landing page (sign in/up)
│   │   ├── favicon.ico    # App favicon
│   │   └── dashboard/
│   │       └── page.tsx   # Protected dashboard for users
│   ├── middleware.ts      # Clerk authentication middleware
│   └── styles/
│       └── globals.css    # Global styles (Tailwind CSS)
├── README.md              # Project documentation
└── ...                    # Other config/build files
```

## Getting Started 🚀

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ahmed-Sehili/OAuth-Login-System
   cd oauth-login-system
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
3. **Configure environment variables:**

   - Copy `.env.example` to `.env` and fill in your [Clerk](https://clerk.com/) keys:
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_[your-publishable-key]
     CLERK_SECRET_KEY=sk_test_[your-secret-key]
     NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
     NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
     ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.** 🌐

## Usage 🧑‍💻

- 🏠 Visit the home page to sign up or sign in with OAuth providers.
- 🚪 Authenticated users are redirected to a protected dashboard displaying their profile info.
- 🔓 Sign out securely from the dashboard.

## License 📄

This project is licensed under the MIT License.
