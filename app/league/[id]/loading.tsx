export default function LeagueLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      <div className="skeleton w-32 h-5 mb-4 rounded" />
      <div className="skeleton w-full h-24 rounded-xl mb-6" />
      <div className="flex gap-2 mb-6">
        <div className="skeleton w-24 h-9 rounded-lg" />
        <div className="skeleton w-20 h-9 rounded-lg" />
        <div className="skeleton w-28 h-9 rounded-lg" />
      </div>
      <div className="skeleton w-full h-96 rounded-xl" />
    </div>
  );
}
