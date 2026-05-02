'use client'
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import logo from '@/assets/logo.png';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const Navbar = () => {
  const userInfo = authClient.useSession();
  console.log(userInfo.data?.user);
  const handleSignOut = async () => {
    await authClient.signOut();
  }
  return (
    <div className="bg-[#7a756c] text-white border-b-0.5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Tile Gallery Logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="font-semibold text-lg">
            TileGallery
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
          <li><NavLink href="/my-profile">My Profile</NavLink></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {!userInfo.data?.user && <ul>  {/* Login Button */}
            <li><Link href="/login">
              <button className="bg-[#1a1814] px-4 py-2 rounded-md btn font-medium">
                Login
              </button>
            </Link></li>
            <li><Link href="/register">
              <button className="bg-[#1a1814] px-4 py-2 rounded-md btn font-medium">
                Register
              </button>
            </Link> </li>
          </ul>
          }
          {
            userInfo.data?.user && 
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image src={userInfo.data.user.image} alt={userInfo.data.user.name} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{userInfo.data.user.name[0]}</Avatar.Fallback>
              </Avatar>
              <button onClick={handleSignOut}
              className="bg-[#1a1814] px-4 py-2 rounded-md btn font-medium" 
            >
              Logout
            </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;