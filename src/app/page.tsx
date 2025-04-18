import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <section className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Welcome to OAuth Login System
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Securely authenticate users with OAuth, Clerk, and Next.js. Fast,
          modern, and easy to use. Get started by signing up or logging in!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SignUpButton>
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition order-1 sm:order-none">
              Create an Account
            </button>
          </SignUpButton>
          <SignInButton>
            <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition order-2 sm:order-none">
              Login
            </button>
          </SignInButton>
        </div>
      </section>
    </main>
  );
}
