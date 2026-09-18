"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Communities",
    category: "Community",
    description:
      "Help provide safe and clean drinking water to communities that need it most.",
    goal: 10000,
    raised: 6500,
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Support Local Education",
    category: "Education",
    description:
      "Help students get access to educational resources and learning materials.",
    goal: 15000,
    raised: 9200,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Community Health Project",
    category: "Health",
    description:
      "Support a community healthcare project designed to help people in need.",
    goal: 20000,
    raised: 12400,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Help Build a Community Library",
    category: "Education",
    description:
      "Help create a community library where children and adults can access books and learning resources.",
    goal: 12000,
    raised: 7800,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Small Business Support",
    category: "Business",
    description:
      "Support local entrepreneurs and help small businesses grow within their communities.",
    goal: 18000,
    raised: 10500,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Environmental Protection Project",
    category: "Environment",
    description:
      "Support environmental initiatives focused on protecting nature and creating a cleaner future.",
    goal: 8000,
    raised: 5600,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "All",
  "Education",
  "Health",
  "Community",
  "Business",
  "Environment",
];

export default function CampaignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Temporary loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredCampaigns =
    selectedCategory === "All"
      ? campaigns
      : campaigns.filter(
          (campaign) => campaign.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Campaigns
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover campaigns and support projects that matter to you.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              disabled={loading}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100"
              } disabled:cursor-not-allowed disabled:opacity-60`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                {/* Image Skeleton */}
                <div className="h-52 bg-gray-200" />

                <div className="p-5">
                  {/* Category */}
                  <div className="h-4 w-20 rounded bg-gray-200" />

                  {/* Title */}
                  <div className="mt-3 h-6 w-3/4 rounded bg-gray-200" />

                  {/* Description */}
                  <div className="mt-3 space-y-2">
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-5/6 rounded bg-gray-200" />
                  </div>

                  {/* Progress */}
                  <div className="mt-6">
                    <div className="flex justify-between">
                      <div className="h-4 w-20 rounded bg-gray-200" />
                      <div className="h-4 w-24 rounded bg-gray-200" />
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-gray-200" />

                    <div className="mt-3 h-4 w-20 rounded bg-gray-200" />
                  </div>

                  {/* Button */}
                  <div className="mt-5 h-10 rounded-lg bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Result Count */}
            <div className="mt-10">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredCampaigns.length}
                </span>{" "}
                campaign
                {filteredCampaigns.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Campaign Grid */}
            {filteredCampaigns.length > 0 ? (
              <div className="mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredCampaigns.map((campaign) => {
                  const progress = Math.min(
                    Math.round(
                      (campaign.raised / campaign.goal) * 100
                    ),
                    100
                  );

                  return (
                    <div
                      key={campaign.id}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="h-52 w-full object-cover"
                      />

                      <div className="p-5">
                        <span className="text-sm font-medium text-blue-600">
                          {campaign.category}
                        </span>

                        <h2 className="mt-2 text-xl font-bold text-gray-900">
                          {campaign.title}
                        </h2>

                        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                          {campaign.description}
                        </p>

                        <div className="mt-5">
                          <div className="mb-2 flex justify-between text-sm">
                            <span className="font-semibold text-gray-900">
                              ${campaign.raised.toLocaleString()}
                            </span>

                            <span className="text-gray-500">
                              of ${campaign.goal.toLocaleString()}
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                            <div
                              className="h-full rounded-full bg-blue-600"
                              style={{
                                width: `${progress}%`,
                              }}
                            />
                          </div>

                          <p className="mt-2 text-sm text-gray-500">
                            {progress}% funded
                          </p>
                        </div>

                        <Link
                          href={`/campaigns/${campaign.id}`}
                          className="mt-5 block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-blue-700"
                        >
                          View Campaign
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mt-12 rounded-xl bg-white p-12 text-center shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">
                  No Campaigns Found
                </h2>

                <p className="mt-3 text-gray-600">
                  There are no campaigns available in this category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}