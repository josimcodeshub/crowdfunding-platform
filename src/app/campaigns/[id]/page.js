import Link from "next/link";
import CampaignDonation from "./CampaignDonation";

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
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default async function CampaignDetails({ params }) {
  const { id } = await params;

  const campaign = campaigns.find(
    (campaign) => campaign.id === Number(id)
  );

  if (!campaign) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Campaign Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            No campaign found for ID: {id}
          </p>

          <Link
            href="/campaigns"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Back to Campaigns
          </Link>
        </div>
      </main>
    );
  }

  const progress = Math.min(
    Math.round((campaign.raised / campaign.goal) * 100),
    100
  );

  const remaining = campaign.goal - campaign.raised;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/campaigns"
          className="mb-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Campaigns
        </Link>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="h-[300px] w-full object-cover md:h-[450px]"
          />

          <div className="grid gap-10 p-6 md:grid-cols-3 md:p-10">
            {/* Campaign Information */}
            <div className="md:col-span-2">
              <p className="font-semibold text-blue-600">
                {campaign.category}
              </p>

              <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                {campaign.title}
              </h1>

              <p className="mt-5 leading-7 text-gray-600">
                {campaign.description}
              </p>

              {/* Progress */}
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${campaign.raised.toLocaleString()}
                  </span>

                  <span className="text-gray-500">
                    of ${campaign.goal.toLocaleString()}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {progress}% funded
                </p>
              </div>

              {/* Campaign Stats */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Goal</p>

                  <p className="mt-1 text-lg font-bold text-gray-900">
                    ${campaign.goal.toLocaleString()}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Raised</p>

                  <p className="mt-1 text-lg font-bold text-gray-900">
                    ${campaign.raised.toLocaleString()}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Remaining</p>

                  <p className="mt-1 text-lg font-bold text-gray-900">
                    ${remaining.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <CampaignDonation remaining={remaining} />
          </div>
        </div>
      </div>
    </main>
  );
}