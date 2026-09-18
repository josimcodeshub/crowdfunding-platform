import CampaignSection from "./components/campaign/CampaignSection";

export default function Home() {
  return (
    <main>
      <section className="min-h-[600px] bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Crowdfunding Platform
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Turn Your Ideas Into Reality
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover meaningful projects, support innovative ideas, and help
            creators bring their dreams to life.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/campaign"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Explore Campaigns
            </a>

            <a
              href="/create-campaign"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Start a Campaign
            </a>
          </div>
        </div>
      </section>

      <CampaignSection />
    </main>
  );
}