import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top 80px gray section */}
      <div className="h-[120px] bg-gray-400 w-full" />

      {/* Remaining white section */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          ⏳ Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          This page is currently being updated. Please check back soon for the latest content.
        </p>
      </div>
    </div>
  );
}
