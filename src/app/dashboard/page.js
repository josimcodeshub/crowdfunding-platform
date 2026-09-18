"use client";

import Link from "next/link";
import AuthGuard from "../components/AuthGuard";

const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Communities",
    category: "Community",
    goal: 10000,
    raised: 6500,
    status: "Active",
  },
  {
    id: 2,
    title: "Support Local Education",
    category: "Education",
    goal: 15000,
    raised: 9200,
    status: "Active",
  },
  {
    id: 3,
    title: "Community Health Project",
    category: "Health",
    goal: 20000,
    raised: 12400,
    status: "Completed",
  },
];

export default function DashboardPage() {
  const totalCampaigns = campaigns.length;

  const totalRaised = campaigns.reduce(
    (total, campaign) => total + campaign.raised,
    0
  );

  const totalGoal = campaigns.reduce(
    (total, campaign) => total + campaign.goal,
    0
  );

  return (

    <AuthGuard> 
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Welcome back
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your campaigns and track your fundraising progress.
            </p>
          </div>

          <Link
            href="/create-campaign"
            className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            + Create Campaign
          </Link>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">My Campaigns</p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {totalCampaigns}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Raised</p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              ${totalRaised.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Goal</p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              ${totalGoal.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Overall Progress</p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {Math.round((totalRaised / totalGoal) * 100)}%
            </p>
          </div>
        </div>

        {/* Campaigns */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                My Campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your current crowdfunding campaigns
              </p>
            </div>

            <Link
              href="/campaigns"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Browse Campaigns →
            </Link>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[750px]">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Campaign
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Category
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Goal
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Raised
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Progress
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {campaigns.map((campaign) => {
                    const progress = Math.min(
                      Math.round(
                        (campaign.raised / campaign.goal) * 100
                      ),
                      100
                    );

                    return (
                      <tr
                        key={campaign.id}
                        className="border-b last:border-b-0 hover:bg-gray-50"
                      >
                        <td className="px-6 py-5">
                          <p className="font-semibold text-gray-900">
                            {campaign.title}
                          </p>
                        </td>

                        <td className="px-6 py-5">
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                            {campaign.category}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-sm text-gray-700">
                          ${campaign.goal.toLocaleString()}
                        </td>

                        <td className="px-6 py-5 text-sm font-semibold text-gray-900">
                          ${campaign.raised.toLocaleString()}
                        </td>

                        <td className="px-6 py-5">
                          <div className="w-32">
                            <div className="h-2 rounded-full bg-gray-200">
                              <div
                                className="h-2 rounded-full bg-blue-600"
                                style={{
                                  width: `${progress}%`,
                                }}
                              />
                            </div>

                            <p className="mt-1 text-xs text-gray-500">
                              {progress}%
                            </p>
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              campaign.status === "Active"
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {campaign.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Quick Actions
          </h2>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <Link
              href="/create-campaign"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">
                Create Campaign
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Start a new fundraising campaign for your idea or project.
              </p>
            </Link>

            <Link
              href="/campaigns"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">
                Browse Campaigns
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Explore campaigns and support projects you care about.
              </p>
            </Link>

            <Link
              href="/profile"
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">
                My Profile
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                View and manage your account information.
              </p>
            </Link>
          </div>
        </div>
      </div>
      </main>
       </AuthGuard>

  );
}