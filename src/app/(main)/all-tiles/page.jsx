"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchTiles } from "@/lib/tile";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadTiles = async () => {
      const data = await fetchTiles();
      setTiles(data.tiles);
    };

    loadTiles();
  }, []);

  // 🔍 Filter tiles by title
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-[#f5f0e8] min-h-screen px-4 py-12">

      <h1 className="text-3xl md:text-4xl text-center text-black mb-6">
        All Tiles
      </h1>

      {/* 🔍 Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search tiles by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-[#2e2b25] focus:outline-none focus:border-[#c9a96e] text-black"
        />
      </div>

      {/* 🧱 Tiles Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredTiles.map((tile) => (
          <div
          key={tile.id}
          className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* Image Wrapper */}
          <div className="relative">
            <img
              src={tile.image}
              alt={tile.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* 🔥 Stock Badge */}
            <span
              className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-medium 
              ${
                tile.inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-gray-800 font-semibold text-lg">
              {tile.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {tile.category}
            </p>

            {/* 💰 Price */}
            <p className="mt-2 text-[#5B7E3C] font-bold text-lg">
              ৳{tile.price}
            </p>

            <Link
              href={`/tile/${tile.id}`}
              className="inline-block mt-4 w-full text-center bg-[#5B7E3C] text-white py-2 rounded-lg hover:bg-[#4a6a30] transition"
            >
              View Details
            </Link>
          </div>
        </div>
        ))}
      </div>

      {/* 🚫 No Results */}
      {filteredTiles.length === 0 && (
        <p className="text-center text-[#7a756c] mt-10">
          No tiles found.
        </p>
      )}
    </div>
  );
};

export default AllTilesPage;