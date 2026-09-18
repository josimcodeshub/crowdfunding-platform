"use client";

import { useState } from "react";
import Link from "next/link";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    email: "sarah@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Smith",
    email: "michael@example.com",
    role: "User",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@fundflow.com",
    role: "Admin",
    status: "Active",
  },
];

const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Communities",
    creator: "John Doe",
    goal: 10000,
    raised: 6500,
    status: "Active",
  },
  {
    id: 2,
    title: "Support Local Education",
    creator: "Sarah Ahmed",
    goal: 15000,
    raised: 9200,
    status: "Active",
  },
  {
    id: 3,
    title: "Community Health Project",
    creator: "Michael Smith",
    goal: 20000,
    raised: 12400,
    status: "Completed",
  },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const [userList, setUserList] = useState(users);

  const handleUserStatus = (id) => {
    setUserList((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Administration
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Manage users, campaigns, reports and transactions.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            ← Back to Website
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
          <div className="flex min-w-max gap-2">
            {[
              ["overview", "Overview"],
              ["users", "Users"],
              ["campaigns", "Campaigns"],
              ["reports", "Reports"],
              ["transactions", "Transactions"],
            ].map(([tab, label]) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="mt-8">
            {/* Statistics */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">
                  Total Users
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  1,248
                </p>

                <p className="mt-2 text-xs text-green-600">
                  +12% this month
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">
                  Total Campaigns
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  356
                </p>

                <p className="mt-2 text-xs text-green-600">
                  +8% this month
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">
                  Total Donations
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  $284K
                </p>

                <p className="mt-2 text-xs text-green-600">
                  +18% this month
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">
                  Pending Reports
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  24
                </p>

                <p className="mt-2 text-xs text-orange-600">
                  Requires attention
                </p>
              </div>
            </div>

            {/* Recent Campaigns */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Campaigns
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Campaign
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Creator
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Goal
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Raised
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr
                        key={campaign.id}
                        className="border-t border-gray-100"
                      >
                        <td className="px-6 py-5 font-semibold text-gray-900">
                          {campaign.title}
                        </td>

                        <td className="px-6 py-5 text-sm text-gray-600">
                          {campaign.creator}
                        </td>

                        <td className="px-6 py-5 text-sm text-gray-700">
                          ${campaign.goal.toLocaleString()}
                        </td>

                        <td className="px-6 py-5 text-sm font-semibold text-gray-900">
                          ${campaign.raised.toLocaleString()}
                        </td>

                        <td className="px-6 py-5">
                          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                            {campaign.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Users */}
        {activeTab === "users" && (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Manage Users
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View and manage registered users.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[750px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Role
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {userList.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-gray-100"
                    >
                      <td className="px-6 py-5 font-semibold text-gray-900">
                        {user.name}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {user.email}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-700">
                        {user.role}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            user.status === "Active"
                              ? "bg-green-50 text-green-700"
                              : "bg-red-50 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        {user.role !== "Admin" && (
                          <button
                            onClick={() =>
                              handleUserStatus(user.id)
                            }
                            className={`rounded-lg px-4 py-2 text-xs font-semibold ${
                              user.status === "Active"
                                ? "bg-red-50 text-red-600 hover:bg-red-100"
                                : "bg-green-50 text-green-600 hover:bg-green-100"
                            }`}
                          >
                            {user.status === "Active"
                              ? "Block"
                              : "Unblock"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Campaigns */}
        {activeTab === "campaigns" && (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Manage Campaigns
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Review and manage all campaigns.
              </p>
            </div>

            <div className="grid gap-5 p-6 md:grid-cols-2 lg:grid-cols-3">
              {campaigns.map((campaign) => {
                const progress = Math.round(
                  (campaign.raised / campaign.goal) * 100
                );

                return (
                  <div
                    key={campaign.id}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="font-bold text-gray-900">
                      {campaign.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Created by {campaign.creator}
                    </p>

                    <div className="mt-5">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold">
                          ${campaign.raised.toLocaleString()}
                        </span>

                        <span className="text-gray-500">
                          {progress}%
                        </span>
                      </div>

                      <div className="mt-2 h-2 rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex gap-2">
                      <button className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                        View
                      </button>

                      <button className="flex-1 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-100">
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Reports */}
        {activeTab === "reports" && (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Campaign Reports
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Review reported campaigns.
              </p>
            </div>

            <div className="space-y-4 p-6">
              {[
                {
                  title: "Suspicious Fundraising Campaign",
                  reason: "Spam",
                  reporter: "user@example.com",
                },
                {
                  title: "Offensive Content Campaign",
                  reason: "Offensive Content",
                  reporter: "member@example.com",
                },
                {
                  title: "Copied Project Description",
                  reason: "Copyright Issue",
                  reporter: "another@example.com",
                },
              ].map((report, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {report.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Reported by {report.reporter}
                      </p>

                      <span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                        {report.reason}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                        Remove
                      </button>

                      <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transactions */}
        {activeTab === "transactions" && (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Transactions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View recent donation transactions.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      User
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Amount
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Payment Status
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Transaction ID
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      user: "John Doe",
                      amount: 100,
                      date: "Sep 18, 2026",
                      status: "Completed",
                      id: "TXN-10001",
                    },
                    {
                      user: "Sarah Ahmed",
                      amount: 250,
                      date: "Sep 17, 2026",
                      status: "Completed",
                      id: "TXN-10002",
                    },
                    {
                      user: "Michael Smith",
                      amount: 75,
                      date: "Sep 16, 2026",
                      status: "Pending",
                      id: "TXN-10003",
                    },
                  ].map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="border-t border-gray-100"
                    >
                      <td className="px-6 py-5 font-semibold text-gray-900">
                        {transaction.user}
                      </td>

                      <td className="px-6 py-5 font-semibold text-gray-900">
                        ${transaction.amount}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {transaction.date}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            transaction.status === "Completed"
                              ? "bg-green-50 text-green-700"
                              : "bg-yellow-50 text-yellow-700"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 font-mono text-xs text-gray-500">
                        {transaction.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}