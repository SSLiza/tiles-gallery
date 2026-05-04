'use client'
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import logo from '@/assets/logo.jpg';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { RiLoginCircleFill, RiUserAddFill } from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';

const Navbar = () => {
  const userInfo = authClient.useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div className="bg-white text-[#5B7E3C] border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Tile Gallery Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="font-semibold text-lg">TilesGallery</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
          <li><NavLink href="/my-profile">My Profile</NavLink></li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {!userInfo.data?.user && (
            <ul className="flex gap-2">
              <li>
                <Link href="/login">
                  <button className="border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md font-medium flex items-center gap-1">
                    <RiLoginCircleFill /><span>Login</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <button className="border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md font-medium flex items-center gap-1">
                    <RiUserAddFill /><span>Register</span>
                  </button>
                </Link>
              </li>
            </ul>
          )}
          {userInfo.data?.user && (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image src={userInfo.data.user.image} alt={userInfo.data.user.name} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{userInfo.data.user.name[0]}</Avatar.Fallback>
              </Avatar>
              <button
                onClick={handleSignOut}
                className="border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md font-medium flex items-center gap-1"
              >
                <IoLogOutSharp /><span>Logout</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#5B7E3C] text-2xl p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 flex flex-col gap-3">
          <ul className="flex flex-col gap-2 font-medium pt-3">
            <li onClick={() => setMenuOpen(false)}><NavLink href="/">Home</NavLink></li>
            <li onClick={() => setMenuOpen(false)}><NavLink href="/all-tiles">All Tiles</NavLink></li>
            <li onClick={() => setMenuOpen(false)}><NavLink href="/my-profile">My Profile</NavLink></li>
          </ul>

          <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
            {!userInfo.data?.user && (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  <button className="w-full border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md font-medium flex items-center justify-center gap-2">
                    <RiLoginCircleFill /><span>Login</span>
                  </button>
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)}>
                  <button className="w-full border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md font-medium flex items-center justify-center gap-2">
                    <RiUserAddFill /><span>Register</span>
                  </button>
                </Link>
              </>
            )}
            {userInfo.data?.user && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <Avatar.Image src={userInfo.data.user.image} alt={userInfo.data.user.name} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{userInfo.data.user.name[0]}</Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-700">{userInfo.data.user.name}</span>
                </div>
                <button
                  onClick={() => { handleSignOut(); setMenuOpen(false); }}
                  className="border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md font-medium flex items-center gap-1"
                >
                  <IoLogOutSharp /><span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;