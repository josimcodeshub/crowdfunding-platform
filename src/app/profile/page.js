"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [bio, setBio] = useState(
    "I am interested in supporting meaningful projects and helping communities grow."
  );

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulated profile update
    setTimeout(() => {
      setLoading(false);
      setSuccess("Profile updated successfully!");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Account Settings
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your personal information and account details.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {/* Profile Summary */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
                JD
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">
                {name || "Your Name"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {email || "your@email.com"}
              </p>

              <span className="mt-4 rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700">
                Active Member
              </span>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="text-sm font-medium text-gray-500">
                About Me
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {bio || "No bio added yet."}
              </p>
            </div>
          </div>

          {/* Edit Profile */}
          <div className="md:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Edit Profile
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your personal information.
              </p>

              {/* Success */}
              {success && (
                <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  {success}
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label
                    htmlFor="bio"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>

                  <textarea
                    id="bio"
                    rows="5"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us a little about yourself"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Saving Changes..." : "Save Changes"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Account Information
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <div>
              <p className="text-sm text-gray-500">Account Type</p>
              <p className="mt-1 font-semibold text-gray-900">
                Standard User
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="mt-1 font-semibold text-gray-900">
                September 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="mt-1 font-semibold text-green-600">
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}