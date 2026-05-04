import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Banner from "@/assets/Banner.png";
import { Button } from "@heroui/react";
export default function Home() {

  return (
    <div className="text-[#f5f0e8]">
      {/* 🔥 BANNER */}
      <section className="text-center pb-16">
        <div className="relative w-full h-[90vh]">

          <Image src={Banner} alt="Featured Tiles" fill className="object-cover" priority />

          <div className="absolute inset-0 flex items-center justify-start">
            <div className="px-12 max-w-2xl text-left">

              {/* Tag — drops and bounces in */}
              <span
                className="inline-block bg-[#5B7E3C] text-white text-[10px] uppercase tracking-widest font-medium px-4 py-1.5 rounded-full mb-5"
                style={{ opacity: 0, animation: "dropBounce 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.2s forwards" }}
              >
                Premium Collection
              </span>

              {/* Heading — slides hard from left */}
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-black animate__animated animate__fadeInLeft"
                style={{ animationDuration: "0.9s", animationDelay: "0.6s" }}
              >
                Discover Your Perfect Aesthetic
              </h1>

              {/* Subtext — rises from below */}
              <p
                className="text-black mb-8 font-semibold"
                style={{ opacity: 0, animation: "riseUp 0.8s ease-out 1.2s forwards" }}
              >
                Explore premium tile designs that redefine modern interior beauty.
              </p>

              {/* Button — zooms in with pop, then pulses */}
              <div
                style={{ opacity: 0, animation: "zoomPop 0.7s cubic-bezier(0.34,1.56,0.64,1) 1.7s forwards" }}
              >
                <Link href="/all-tiles">
                  <Button
                    className="bg-[#5B7E3C] text-white transition-all duration-300 hover:scale-105"
                    style={{ animation: "pulseGlow 2s ease-in-out 2.5s infinite" }}
                  >
                    Browse Now
                  </Button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 📢 MARQUEE */}
      <div className="bg-white border-y border-gray-200 py-3 overflow-hidden">
        <Marquee className="whitespace-nowrap text-gray-700 text-sm">
          New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric Patterns | Join the Community | Premium Marble Collection | Minimal Aesthetic Series
        </Marquee>
      </div>

      {/* ⭐ FEATURED TILES */}
      <section className="container mx-auto px-4 py-16">

        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
          Featured Tiles
        </h2>

        <FeaturedTiles />

        {/* Centered View All */}
        <div className="flex justify-center mt-10">
          <Link href="/all-tiles">
            <Button className="bg-[#5B7E3C] text-white hover:scale-105 transition">
              View All
            </Button>
          </Link>
        </div>

      </section>

    </div>
  );
}