'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { FaHeart, FaLock } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import LockedMessage from './LockedMessage';
import { BiSolidMessageRounded } from 'react-icons/bi';
import ProgressBar from '@ramonak/react-progress-bar';
import { useRouter } from 'next/navigation';

const calculateHeight = (width: number) => {
  let calculatedHeight = width * 0.3;
  if (width > 1200) {
    calculatedHeight = calculateHeight(1199);
  }
  return calculatedHeight;
};

interface Props {
  locked?: boolean;
  results?: boolean;
}

const Post: FC<Props> = ({ locked, results }) => {
  const [windowHeight, setWindowHeight] = useState(1200);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(calculateHeight(window.innerWidth));
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      setWindowHeight(calculateHeight(window.innerWidth));
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            alt="avatar"
            height={50}
            width={50}
            className="mr-4 cursor-pointer"
            onClick={() => router.push('/123')}
          />
          <div>
            <h6
              onClick={() => router.push('/123')}
              className="font-candy text-2xl font-bold cursor-pointer"
            >
              Flora
            </h6>
            <p className="font-candy text-lg">#Social Media</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src={results ? '/icons/star.png' : '/icons/diamond.png'}
            alt={results ? 'star' : 'diamond'}
            height={40}
            width={40}
            className="mr-4 cursor-pointer"
          />
          {!results && (
            <HiDotsHorizontal fontSize={40} className="cursor-pointer" />
          )}
        </div>
      </div>
      <div className="font-candy my-4">What is my best dress for Mykonos ?</div>
      <div className="grid grid-cols-2 gap-5 relative">
        {[1, 2, 3, 4].map((item, index) => (
          <div
            className={`relative w-full rounded-xl overflow-hidden`}
            key={index}
            style={{ height: `${windowHeight}px` }}
          >
            <Image
              src="https://i.pinimg.com/736x/c9/10/42/c91042d040f338940c57f34a37e4bffa.jpg"
              alt={item.toString()}
              fill
              objectFit="cover"
              objectPosition="top"
              className={locked ? 'blur-xl' : ''}
            />

            {results && (
              <BiSolidMessageRounded
                fontSize={40}
                className="absolute bottom-4 left-4 z-10 cursor-pointer"
              />
            )}
            {!locked && (
              <FaHeart
                fontSize={36}
                className="absolute bottom-4 right-4 z-10 cursor-pointer"
              />
            )}
            {locked && (
              <div
                className="absolute top-1/2 left-1/2 h-12 w-12 bg-white dark:bg-black rounded-full flex items-center justify-center"
                style={{ transform: 'translate(-50%,-50%)' }}
              >
                <FaLock
                  fontSize={24}
                  className="text-gray-700 dark:text-gray-100"
                />
              </div>
            )}
          </div>
        ))}
        {locked && <LockedMessage />}
      </div>
      {results && (
        <>
          <div>
            <div className="flex justify-end my-2 text-lg font-candy">
              18/20 Votes
            </div>
            <ProgressBar
              completed={60}
              height="8px"
              isLabelVisible={false}
              bgColor="#fd2555"
              className="my-5"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="font-candy py-2 px-8 w-3/4 rounded-full border self-center flex items-center justify-around">
              <Image
                src="/icons/diamond.png"
                alt="diamond"
                height={30}
                width={30}
              />
              Boosted
              <Image
                src="/icons/diamond.png"
                alt="diamond"
                height={30}
                width={30}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
