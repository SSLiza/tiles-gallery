import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Banner from "@/assets/Banner.png";
import { Button } from "@heroui/react";
export default function Home() {
  return (
    <div className="bg-[#0f0e0c] text-[#f5f0e8]">

      {/* 🔥 BANNER */}
       <section className="text-center py-16">
      <div className="relative w-full h-[60vh] max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl">
        
        {/* Image */}
        <Image
          src={Banner}
          alt="Featured Tiles"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
          <div className="text-white px-6 max-w-2xl">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c9a96e]">
              Discover Your Perfect Aesthetic
            </h1>

            <p className="text-[#e0dcd5] mb-8">
              Explore premium tile designs that redefine modern interior beauty.
            </p>

            <div className="flex justify-center gap-4">
              <Link href="/all-tiles">
                <Button className="bg-[#c9a96e] text-[#0f0e0c] hover:bg-[#e8c98a]">
                  Browse Now
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </div>
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