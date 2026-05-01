"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const res = await fetch("http://localhost:5000/tiles");
        const data = await res.json();
        setTiles(data);
      } catch (error) {
        console.error("Error fetching tiles:", error);
      }
    };

    fetchTiles();
  }, []);

  return (
    <div className="bg-[#0f0e0c] text-[#f5f0e8] min-h-screen px-4 py-12">
      
      <h1 className="text-3xl md:text-4xl text-center text-[#c9a96e] mb-10">
        All Tiles
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-[#1a1814] border border-[#2e2b25] rounded-lg overflow-hidden hover:scale-105 transition"
          >
            <Image
              src={tile.image}
              alt={tile.title}
              className="h-40 w-full object-cover"
              width={300}
              height={200}
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

    </div>
  );
};

export default AllTilesPage;