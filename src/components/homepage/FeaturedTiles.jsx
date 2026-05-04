"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchTiles } from "@/lib/tile";

const FeaturedTiles = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const loadTiles = async () => {
      const data = await fetchTiles();
      setTiles(data.tiles.slice(0, 4));
    };
    loadTiles();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {tiles.map((tile) => (
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
  );
};

export default FeaturedTiles;