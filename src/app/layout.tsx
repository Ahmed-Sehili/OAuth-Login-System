import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OAuth Login System",
  description: "OAuth Login System with Clerk & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col min-h-screen text-zinc-900 dark:text-white relative overflow-hidden">
            <div className="animated-gradient-bg" />
            <header className="flex justify-between items-center px-6 py-3 h-20 bg-white/80 dark:bg-zinc-900/80 shadow-sm border-b border-zinc-200 dark:border-zinc-800 rounded-b-xl backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text select-none tracking-tight">
                  OAuth Login System
                </span>
              </div>
              <div className="flex items-center gap-4">
                <SignedOut>
                  <SignUpButton mode="redirect" forceRedirectUrl="/dashboard">
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
                      Create an Account
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </header>
            <main className="flex-grow max-w-7xl mx-auto px-4 py-6">
              {children}
            </main>
            <footer className="bg-white/80 dark:bg-zinc-900/80 shadow-inner border-t border-zinc-200 dark:border-zinc-800 py-4">
              <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} OAuth Login System. All rights
                reserved.
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
