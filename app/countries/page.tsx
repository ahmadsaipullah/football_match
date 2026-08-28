import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Globe } from "lucide-react";
import { getCountries } from "@/app/lib/api";

async function CountriesContent() {
  const countries = await getCountries();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {countries.map((country) => (
        <Link
          key={country.name}
          href={`/leagues/${encodeURIComponent(country.name)}`}
          className="card flex items-center gap-3 px-4 py-3 group hover:border-[#10b981]/30 transition"
        >
          {country.flag ? (
            <Image
              src={country.flag}
              alt={country.name}
              width={28}
              height={20}
              className="rounded-sm shrink-0"
              unoptimized
            />
          ) : (
            <Globe size={20} className="text-[#64748b] shrink-0" />
          )}
          <span className="text-sm font-medium text-[#94a3b8] group-hover:text-white transition truncate">
            {country.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function CountriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">
          <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
            Countries
          </span>
        </h1>
        <p className="text-sm text-[#64748b]">
          Browse football leagues from 190+ countries worldwide
        </p>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="skeleton h-12 rounded-xl" />
            ))}
          </div>
        }
      >
        <CountriesContent />
      </Suspense>
    </div>
  );
}
