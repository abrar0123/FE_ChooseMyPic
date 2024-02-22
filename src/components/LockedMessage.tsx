import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const LockedMessage = () => {
  return (
    <div
      className="absolute top-1/2 left-1/2 w-80 z-40 bg-white dark:bg-black rounded-md overflow-hidden"
      style={{ transform: 'translate(-50%,-50%)' }}
    >
      <Image
        src="https://www.shutterstock.com/image-photo/suntan-beach-bikini-woman-lying-260nw-1426641155.jpg"
        alt="cover"
        width={320}
        height={80}
      />
      <div className="flex items-end w-full h-[80px] -mt-[40px] px-3 gap-2 mb-4">
        <Image
          src="https://img.freepik.com/premium-photo/fashion-glamour-nice-joyful-women-lying-beach-bed-while-reading-news-about-fashion_259150-31715.jpg"
          alt="display-picture"
          height={80}
          width={80}
          objectFit="cover"
          className="rounded-full flex-shrink-0 h-[100px] w-[100px] border border-white dark:border-black"
        />
        <div>
          <h6 className="font-candy text-sm">Body by Lorrie</h6>
          <p className="text-xs opacity-70">@bodybylorrie</p>
        </div>
      </div>
      <div className="p-3">
        <h6 className="font-candy text-sm mb-4">
          SUBSCRIBE AND GET THESE BENEFITS
        </h6>
        <ul className="mb-4">
          <li className="flex items-center gap-2 text-sm">
            <IoMdCheckmark /> Full access to this user&apos;s content.
          </li>
          <li className="flex items-center gap-2 text-sm">
            <IoMdCheckmark /> Direct messages with this user.
          </li>
          <li className="flex items-center gap-2 text-sm">
            <IoMdCheckmark /> Cancel your subscription at any time.
          </li>
        </ul>
        <button className="font-candy w-full py-4 text-xs rounded-full border uppercase flex justify-center items-center">
          Please add a payment card
        </button>
      </div>
    </div>
  );
};

export default LockedMessage;
