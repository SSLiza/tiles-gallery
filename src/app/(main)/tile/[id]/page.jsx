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
    return (
      <div className="min-h-screen bg-[#f9f9f7] flex items-center justify-center">
        <p className="text-sm text-gray-400 tracking-widest uppercase">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f7] px-6 py-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div
        className="max-w-4xl mx-auto grid md:grid-cols-2 overflow-hidden bg-white"
        style={{ borderRadius: "20px", boxShadow: "0 2px 32px rgba(0,0,0,0.07)", border: "1px solid #eee" }}
      >
        {/* LEFT: IMAGE */}
        <div className="relative min-h-[500px] bg-[#f4f6f2]">
          <Image src={tile.image} alt={tile.title} fill className="object-cover" />
          <span className="absolute top-4 left-4 bg-[#5B7E3C] text-white text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full">
            New Arrival
          </span>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col p-10">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#5B7E3C] font-medium mb-1">
            Artisan Collection
          </p>

          <h1 className="text-[2rem] font-bold text-[#1a1a18] leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {tile.title}
          </h1>

          <p className="text-[13px] text-[#aaa] mb-5">By {tile.creator || "Unknown"}</p>

          <p className="text-[1.7rem] font-bold text-[#5B7E3C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            ${tile.price} <span className="text-[13px] font-normal text-[#aaa]">{tile.currency}</span>
          </p>

          <p className="text-[14px] text-[#777] leading-relaxed mb-5">{tile.description}</p>

          <hr className="border-[#f0f0ee] mb-5" />

          <div className="flex flex-col gap-2 mb-5">
            <div className="flex justify-between text-[13px]">
              <span className="text-[#bbb]">Material</span>
              <span className="text-[#333] font-medium">{tile.material}</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-[#bbb]">Dimensions</span>
              <span className="text-[#333] font-medium">{tile.dimensions}</span>
            </div>
          </div>

          {tile.inStock ? (
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#5B7E3C] bg-[#f0f7ea] px-3 py-1 rounded-full w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B7E3C]" /> In Stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#c0392b] bg-[#fdf0f0] px-3 py-1 rounded-full w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" /> Out of Stock
            </span>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {tile.tags?.map((tag, i) => (
              <span key={i} className="text-[11px] text-[#888] bg-[#f7f7f5] border border-[#eee] rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-auto w-full py-3 rounded-xl bg-[#5B7E3C] hover:bg-[#4e6e33] text-white text-[13px] font-medium uppercase tracking-wider transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;