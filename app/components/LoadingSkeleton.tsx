export default function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Filter skeleton */}
      <div className="flex items-center gap-2">
        <div className="skeleton w-16 h-9 rounded-lg" />
        <div className="skeleton w-16 h-9 rounded-lg" />
        <div className="skeleton w-20 h-9 rounded-lg" />
        <div className="skeleton w-24 h-9 rounded-lg" />
      </div>

      {/* Date picker skeleton */}
      <div className="flex items-center gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="skeleton w-16 h-12 rounded-lg" />
        ))}
      </div>

      {/* Match groups skeleton */}
      {Array.from({ length: 4 }).map((_, gi) => (
        <div key={gi}>
          <div className="skeleton w-full h-10 rounded-t-lg" />
          <div className="border border-[#1e2433] border-t-0 rounded-b-lg">
            {Array.from({ length: 3 }).map((_, mi) => (
              <div
                key={mi}
                className="flex items-center gap-3 px-4 py-3 border-b border-[#1e2433]/50 last:border-b-0"
              >
                <div className="skeleton w-12 h-5" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="skeleton w-5 h-5 rounded" />
                      <div className="skeleton w-28 h-4" />
                    </div>
                    <div className="skeleton w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="skeleton w-5 h-5 rounded" />
                      <div className="skeleton w-24 h-4" />
                    </div>
                    <div className="skeleton w-4 h-4" />
                  </div>
                </div>
                <div className="skeleton w-12 h-4" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
