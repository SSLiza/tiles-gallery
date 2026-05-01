'use client'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1a1814] text-[#f5f0e8] border-[#2e2b25]">

      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#c9a96e] mb-3">
            TileGallery
          </h2>
          <p className="text-sm text-[#7a756c]">
            Discover premium aesthetic tiles for modern interiors.
            Build beautiful spaces with timeless designs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#c9a96e] font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#e8c98a] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-tiles" className="hover:text-[#e8c98a] transition">
                All Tiles
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="hover:text-[#e8c98a] transition">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-[#c9a96e] font-medium mb-3">Contact</h3>
          <p className="text-sm text-[#7a756c]">
            Email: support@tilegallery.com <br />
            Phone: +880 1XXX-XXXXXX
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2e2b25] text-center py-4 text-sm text-[#7a756c]">
        © {new Date().getFullYear()} TileGallery. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;