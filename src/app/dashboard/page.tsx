"use client";

import { UserButton, useUser, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="animated-gradient-bg" />
        <div className="bg-gray-100 dark:bg-zinc-900/90 p-8 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-md w-full max-w-2xl mx-auto">
          <div className="text-xl text-gray-600 dark:text-gray-300">
            Loading...
          </div>
        </div>
      </main>
    );
  }

  if (!user) return null;

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="animated-gradient-bg" />
      <div className="bg-gray-100 dark:bg-zinc-900/90 p-8 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-md w-full max-w-2xl mx-auto">
        <section className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Welcome, {user.firstName || user.username || "User"}!
          </h1>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={user.imageUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg mb-2"
              width={96}
              height={96}
            />
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {user.fullName}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-base">
              {user.emailAddresses?.[0]?.emailAddress}
            </div>
          </div>
          <SignOutButton>
            <button className="px-4 py-2 mt-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
              Sign Out
            </button>
          </SignOutButton>
        </section>
      </div>
    </main>
  );
}
