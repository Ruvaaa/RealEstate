// components/listings/PropertyFilterBar.tsx
"use client";

import { useState } from "react";

export function PropertyFilterBar({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [intent, setIntent] = useState<string>("ALL");
  const [type, setType] = useState<string>("ALL");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const handleApply = () => {
    onFilterChange({ intent, type, maxPrice });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      {/* Intent Selector */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          Listing Type
        </label>
        <select
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <option value="ALL">All Listings</option>
          <option value="FOR_SALE">For Sale</option>
          <option value="FOR_RENT">For Rent</option>
        </select>
      </div>

      {/* Property Type Selector */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          Property Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <option value="ALL">All Categories</option>
          <option value="RESIDENTIAL_HOUSE">House</option>
          <option value="APARTMENT">Apartment / Flat</option>
          <option value="COMMERCIAL">Commercial Space</option>
          <option value="LAND">Land / Plot</option>
        </select>
      </div>

      {/* Max Price Input */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          Max Budget ($)
        </label>
        <input
          type="number"
          placeholder="e.g. 250,000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      {/* Apply Button */}
      <div>
        <button
          onClick={handleApply}
          className="w-full p-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors text-sm shadow-md"
        >
          Search Properties
        </button>
      </div>
    </div>
  );
}