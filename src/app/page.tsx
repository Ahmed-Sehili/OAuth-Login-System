import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="animated-gradient-bg" />
      <div className="bg-gray-100 dark:bg-zinc-900/90 p-8 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-md w-full max-w-4xl mx-auto">
        <section className="max-w-3xl mx-auto sm:min-h-[400px] flex flex-col justify-center gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Welcome to my Login System
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400  mb-6">
            Securely authenticate users with OAuth, Clerk, and Next.js. Fast,
            modern, and easy to use. Get started by signing up or logging in!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton>
              <button className="cursor-pointer px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition order-1 sm:order-none">
                Let's get started
              </button>
            </SignUpButton>
            <SignInButton>
              <button className="cursor-pointer px-6 py-3 rounded-lg text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition order-2 sm:order-none">
                Already have an account?
              </button>
            </SignInButton>
          </div>
        </section>
      </div>
    </main>
  );
}
