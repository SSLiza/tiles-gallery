'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`
        relative px-2 py-1 transition-all duration-300
        ${isActive 
          ? 'border-b-2 border-[var(--gold)] text-black font-semibold' 
          : ''}
      `}
    >
      {children}

      {/* Underline Animation */}
      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] bg-[var(--gold)]
          transition-all duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      ></span>
    </Link>
  );
};

export default NavLink;