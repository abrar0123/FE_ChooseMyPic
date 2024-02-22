import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart, FaRegStar } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { SlClock, SlLocationPin } from 'react-icons/sl';

const ProfileHead = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-32">
        <Image
          src="https://www.shutterstock.com/image-photo/suntan-beach-bikini-woman-lying-260nw-1426641155.jpg"
          alt="cover"
          objectFit="cover"
          fill
        />
      </div>
      <div className="flex w-full -mt-[80px] px-5 gap-2 mb-4 z-50">
        <Image
          src="https://img.freepik.com/premium-photo/fashion-glamour-nice-joyful-women-lying-beach-bed-while-reading-news-about-fashion_259150-31715.jpg"
          alt="display-picture"
          height={160}
          width={160}
          objectFit="cover"
          className="rounded-full flex-shrink-0 h-[160px] w-[160px] border border-white dark:border-black z-10"
        />
        <div className="mt-[90px] flex justify-between flex-1">
          <div>
            <h6 className="font-candy text-lg">SassySparkle</h6>
            <p className="text-xs opacity-70">@bodybylorrie</p>
            <div className="flex items-center gap-3 my-2">
              <SlClock color="orange" />
              <span className="opacity-70 text-xs">10 hours ago</span>
            </div>
            <div className="flex items-center gap-3 my-2">
              <SlLocationPin color="purple" />
              <span className="opacity-70 text-xs">United States</span>
            </div>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col items-center">
                <h6 className="text-base font-semibold">45</h6>
                <p className="text-xs font-semibold">Survey</p>
              </div>
              <div className="flex flex-col items-center">
                <Link href="/followers" className="text-base font-semibold">
                  154
                </Link>
                <p className="text-xs font-semibold">Followers</p>
              </div>
              <HiOutlineDotsVertical className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="h-8 w-8 rounded-full border flex items-center justify-center cursor-pointer">
                <FaHeart fontSize={14} />
              </span>
              <span className="h-8 w-8 rounded-full border flex items-center justify-center cursor-pointer">
                <FaRegStar fontSize={14} />
              </span>
              <span className="h-8 w-8 rounded-full border flex items-center justify-center cursor-pointer">
                <FaRegShareFromSquare fontSize={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 w-full">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
        accusamus recusandae iure sapiente architecto ducimus est vel expedita
        facere perspiciatis atque incidunt ex aut odio minima delectus, ab
        aspernatur, sit fugit! Rem aliquid accusantium in illum aperiam porro,
        itaque sunt doloribus vero. Unde, eos, nostrum aliquam sequi rerum autem
        exercitationem, odio praesentium voluptate tempore perspiciatis rem
        ducimus. Maiores doloribus quod recusandae, aut at amet ad quaerat
        consequatur aspernatur deserunt neque voluptate rem atque eius ullam
        animi! Earum est nostrum labore? Voluptatibus hic debitis quae quos.
        Doloribus delectus possimus sit neque tempore, soluta, nulla molestias
        ut totam hic omnis harum iusto.
      </div>
    </div>
  );
};

export default ProfileHead;
