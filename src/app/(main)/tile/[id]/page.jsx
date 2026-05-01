"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { fetchTileById } from "@/lib/tile";

const TileDetailsPage = () => {
  const { id } = useParams();
  const [tile, setTile] = useState(null);

useEffect(() => {
    const loadTile = async () => {
      const data = await fetchTileById(id);
      setTile(data);
    };

    if (id) loadTile();
  }, [id]);

  if (!tile) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="bg-[#0f0e0c] text-[#f5f0e8] min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div>
          <h1 className="text-4xl text-[#c9a96e] font-bold mb-3">
            {tile.title}
          </h1>

          <p className="text-sm text-[#aaa] mb-2">
            By: {tile.creator || "Unknown"}
          </p>

          <p className="text-lg mb-4">
            ${tile.price} {tile.currency}
          </p>

          <p className="text-[#cfc7b8] mb-4">
            {tile.description}
          </p>

          {/* Extra Info */}
          <div className="mb-4 text-sm space-y-1">
            <p><strong>Material:</strong> {tile.material}</p>
            <p><strong>Dimensions:</strong> {tile.dimensions}</p>
            <p>
              <strong>Status:</strong>{" "}
              {tile.inStock ? (
                <span className="text-green-400">In Stock</span>
              ) : (
                <span className="text-red-400">Out of Stock</span>
              )}
            </p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tile.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-[#c9a96e] text-black px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TileDetailsPage;