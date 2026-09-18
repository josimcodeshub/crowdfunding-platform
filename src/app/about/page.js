export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About FundFlow
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Turning Ideas Into Impact
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            FundFlow is a crowdfunding platform that connects people with
            meaningful projects, creative ideas, and community initiatives
            that need support.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
              🎯
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our mission is to make it easier for creators and communities
              to share their ideas and receive support from people who
              believe in those ideas.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
              🌍
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Our Vision
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We want to build a community where good ideas can find the
              support they need and where people can contribute to projects
              that create meaningful change.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <section className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How It Works
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Simple. Transparent. Community Driven.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Create a Campaign
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Share your idea, explain your goal, and tell the community
                why your project matters.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Get Support
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                People can discover your campaign and contribute toward
                your funding goal.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Make an Impact
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Use the support you receive to turn your campaign idea into
                meaningful results.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-blue-600 px-6 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Have an Idea Worth Supporting?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Start your campaign and share your idea with the FundFlow
            community.
          </p>

          <a
            href="/create-campaign"
            className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Start a Campaign
          </a>
        </section>

      </div>
    </main>
  );
}