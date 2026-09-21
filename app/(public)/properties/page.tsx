// app/(public)/properties/page.tsx
"use client";

import { useState } from "react";
import { PropertyFilterBar } from "@/components/listings/PropertyFilterBar";

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    intent: "ALL",
    type: "ALL",
    maxPrice: "",
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    // Trigger database query or API call with new filters here
    console.log("Updated Filters:", newFilters);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Find Your Dream Property
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Browse available residential homes, commercial units, and land.
          </p>
        </div>

        {/* Filter Bar Component */}
        <PropertyFilterBar onFilterChange={handleFilterChange} />

        {/* Listing Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Property cards go here */}
        </div>
      </div>
    </main>
  );
}