export default function CountriesLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="skeleton w-48 h-8 mb-2 rounded" />
      <div className="skeleton w-64 h-5 mb-6 rounded" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="skeleton h-12 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
