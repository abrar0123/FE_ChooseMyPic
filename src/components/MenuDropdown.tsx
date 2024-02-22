import Image from 'next/image';
import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { HiOutlineBookmark, HiOutlineMoon } from 'react-icons/hi';
import { MdOutlineLogout } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { TbUserHeart } from 'react-icons/tb';

const MenuDropdown = () => {
  return (
    <div className="absolute right-0 top-[120%] w-60 bg-slate-100 dark:bg-black shadow-lg p-2 rounded-lg z-50">
      <div className="flex items-center p-2 cursor-pointer">
        <Image
          src="/icons/diamond.png"
          alt="diamond"
          height={24}
          width={24}
          className="mr-4"
        />
        <span className="text-base font-candy">0 Diamonds</span>
      </div>
      <div className="flex items-center p-2 cursor-pointer">
        <Image
          src="/icons/revenue.png"
          alt="revenue"
          height={24}
          width={24}
          className="mr-4"
        />
        <span className="text-base font-candy">Revenue: 150€</span>
      </div>
      <hr className="border-[#1a1a1a]" />
      <div className="flex items-center p-2 cursor-pointer">
        <Image
          src="/icons/survey.png"
          alt="survey"
          height={24}
          width={24}
          className="mr-4"
        />
        <span className="text-base font-candy">Post a Survey</span>
      </div>
      <div className="flex items-center p-2 cursor-pointer">
        <FaCrown fontSize={24} color="gold" className="mr-4" />
        <span className="text-base font-candy">Become a Creator</span>
      </div>
      <div className="flex items-center p-2 cursor-pointer">
        <Image
          src="/icons/card.png"
          alt="card"
          height={24}
          width={24}
          className="mr-4"
        />
        <span className="text-base font-candy">Your Credit Card</span>
      </div>
      <hr className="border-[#1a1a1a]" />
      <div className="flex items-center p-2 cursor-pointer">
        <TbUserHeart fontSize={24} className="mr-4" />
        <span className="text-base font-candy">Subscriptions</span>
      </div>
      <div className="flex items-center p-2 cursor-pointer">
        <HiOutlineBookmark fontSize={24} className="mr-4" />
        <span className="text-base font-candy">Bookmarks</span>
      </div>
      <div className="flex items-center p-2 cursor-pointer">
        <RiSettings4Line fontSize={24} className="mr-4" />
        <span className="text-base font-candy">Settings</span>
      </div>
      <hr className="border-[#1a1a1a]" />
      <div className="flex items-center p-2 cursor-pointer">
        <HiOutlineMoon fontSize={24} className="mr-4" />
        <span className="text-base font-candy">Dark Mode</span>
      </div>
      <hr className="border-[#1a1a1a]" />
      <div className="flex items-center p-2 cursor-pointer">
        <MdOutlineLogout fontSize={24} className="mr-4" />
        <span className="text-base font-candy">Logout</span>
      </div>
    </div>
  );
};

export default MenuDropdown;
