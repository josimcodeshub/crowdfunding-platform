"use client";

import { useState } from "react";

export default function CampaignDonation({ remaining }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!amount) {
      setError("Please enter a donation amount.");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Donation amount must be greater than 0.");
      return;
    }

    if (Number(amount) > remaining) {
      setError("Donation amount cannot exceed the remaining goal.");
      return;
    }

    setLoading(true);

    // Simulated donation
    setTimeout(() => {
      setLoading(false);

      setSuccess(
        `Thank you! Your $${Number(amount).toLocaleString()} donation was successful.`
      );

      setAmount("");
    }, 1500);
  };

  return (
    <div>
      <div className="rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Support This Campaign
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Choose an amount to support this project.
        </p>

        {success && (
          <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            {success}
          </div>
        )}

        {error && (
          <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleDonate} className="mt-6">
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Donation Amount ($)
          </label>

          <input
            id="amount"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[25, 50, 100].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600"
              >
                ${value}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing Donation..." : "Donate Now"}
          </button>
        </form>
      </div>
    </div>
  );
}