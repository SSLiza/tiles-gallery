'use client'
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import logo from '@/assets/logo.jpg';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { RiLoginCircleFill ,RiUserAddFill} from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";



const Navbar = () => {
  const userInfo = authClient.useSession();
  console.log(userInfo.data?.user);
const router = useRouter();

const handleSignOut = async () => {
  await authClient.signOut();
  router.push("/login");
};
  return (
    <div className="bg-white text-[#5B7E3C] border-b-0.5 sticky top-0 z-50 border-b border-gray-200">
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
          <span className="font-semibold text-lg">
            TilesGallery
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

          {!userInfo.data?.user && <ul className='flex gap-2'>  {/* Login Button */}
            <li><Link href="/login">
              <button className="border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md btn font-medium flex items-center gap-1">
                <span><RiLoginCircleFill /></span><span>Login</span>
              </button>
            </Link></li>
            <li><Link href="/register">
              <button className="border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md btn font-medium flex items-center gap-1 ">
                <span><RiUserAddFill /></span> <span>Register</span>
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
              className="border border-[#5B7E3C] text-[#5B7E3C] p-2 rounded-md btn font-medium flex items-center gap-1" 
            >
              <span><IoLogOutSharp /></span> <span>Logout</span>
            </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;