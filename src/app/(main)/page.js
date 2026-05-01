import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <div className="bg-[#0f0e0c] text-[#f5f0e8]">

      {/* 🔥 BANNER */}
      <section className="text-center py-24 px-4 bg-gradient-to-b from-[#1a1814] to-[#0f0e0c]">
        <h1 className="text-4xl md:text-6xl font-bold text-[#c9a96e] mb-6">
          Discover Your Perfect Aesthetic
        </h1>

        <p className="text-[#7a756c] mb-8 max-w-2xl mx-auto">
          Explore premium tile designs that redefine modern interior beauty.
        </p>

        <Link
          href="/all-tiles"
          className="bg-[#c9a96e] text-[#0f0e0c] px-6 py-3 rounded-md font-semibold hover:bg-[#e8c98a] transition"
        >
          Browse Now
        </Link>
      </section>

      {/* 📢 MARQUEE */}
      <div className="bg-[#1a1814] border-y border-[#2e2b25] py-3 overflow-hidden">
        <Marquee className="whitespace-nowrap text-[#7a756c] text-sm">
          New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric Patterns | Join the Community | Premium Marble Collection | Minimal Aesthetic Series
        </Marquee>
      </div>

      {/* ⭐ FEATURED TILES */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#c9a96e] mb-8 text-center">
          Featured Tiles
        </h2>

        <FeaturedTiles />
      </section>

    </div>
  );
}