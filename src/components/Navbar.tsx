'use client';

import useOutsideAlerter from '@/hooks/useOnClickOutside';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import MenuDropdown from './MenuDropdown';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, () => setShowDropdown(false));

  return (
    <div className="container">
      <div className="flex items-center justify-between py-8">
        <Link href="/" className="text-2xl font-candy">
          LOGO
        </Link>
        <div className="flex items-center">
          <div className="flex items-center mr-6 cursor-pointer">
            <Image
              src="/icons/diamond.png"
              alt="diamond"
              height={40}
              width={40}
              className="mr-2"
            />
            <span className="text-xl font-candy">5</span>
          </div>
          <div
            ref={dropdownRef}
            className="flex items-center cursor-pointer relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Image
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
              alt="avatar"
              height={50}
              width={50}
              className="mr-2"
            />
            <HiOutlineChevronDown />
            {showDropdown && <MenuDropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
