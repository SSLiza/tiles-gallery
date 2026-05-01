"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const FeaturedTiles = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const fetchTiles = async () => {
      const res = await fetch("http://localhost:5000/tiles");
      const data = await res.json();
      setTiles(data.slice(0, 4)); // top 4 tiles
    };

    fetchTiles();
  }, []);

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="bg-[#1a1814] border border-[#2e2b25] rounded-lg overflow-hidden hover:scale-105 transition"
        >
          <img
            src={tile.image}
            alt={tile.title}
            className="h-40 w-full object-cover"
          />

          <div className="p-4">
            <h3 className="text-[#c9a96e] font-semibold">
              {tile.title}
            </h3>

            <p className="text-sm text-[#7a756c] mt-1">
              {tile.category}
            </p>

            <Link
              href={`/tile/${tile.id}`}
              className="inline-block mt-3 bg-[#c9a96e] text-[#0f0e0c] px-3 py-1 rounded hover:bg-[#e8c98a] transition text-sm"
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