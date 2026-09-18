"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("fundflow_logged_in");

    if (loggedIn === "true") {
      setAuthenticated(true);
    } else {
      router.replace("/login");
    }

    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="mt-4 text-sm text-gray-600">
            Checking authentication...
          </p>
        </div>
      </main>
    );
  }

  if (!authenticated) {
    return null;
  }

  return children;
}