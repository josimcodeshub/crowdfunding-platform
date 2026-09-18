import CampaignCard from "./CampaignCard";

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
];

export default function CampaignSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Featured Campaigns
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Support a Cause
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore campaigns and support projects that are making a
            difference.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
}