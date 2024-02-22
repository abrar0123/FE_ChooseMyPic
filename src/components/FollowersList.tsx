'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const FollowersList = () => {
  const list = [1, 2, 3, 4, 5, 6];

  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-10">
      {list.map((i) => (
        <div className="flex items-center" key={i}>
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            alt="avatar"
            height={50}
            width={50}
            className="mr-4 cursor-pointer"
            onClick={() => router.push('/123')}
          />
          <span onClick={() => router.push('/123')} className="cursor-pointer">
            Test User {i}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FollowersList;
