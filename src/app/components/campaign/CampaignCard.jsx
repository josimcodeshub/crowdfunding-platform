export default function CampaignCard({ campaign }) {
  const progress = Math.min(
    Math.round((campaign.raised / campaign.goal) * 100),
    100
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-sm font-medium text-blue-600">
          {campaign.category}
        </span>

        <h3 className="mt-2 text-xl font-bold text-gray-900">
          {campaign.title}
        </h3>

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
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-gray-500">
            {progress}% funded
          </p>
        </div>

        <a
          href={`/campaign/${campaign.id}`}
          className="mt-5 block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center font-semibold text-white hover:bg-blue-700"
        >
          View Campaign
        </a>
      </div>
    </div>
  );
}