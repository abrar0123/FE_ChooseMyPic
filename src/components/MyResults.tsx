import Image from 'next/image';
import React from 'react';
import Post from './Post';

const MyResults = () => {
  return (
    <div className="flex flex-col items-center">
      <h6 className="font-candy text-2xl mb-5">My Results</h6>
      <div className="w-full flex justify-end mb-4">
        <button className="font-candy py-4 px-12 rounded-full border w-fit flex items-center">
          <Image
            className="mr-4"
            src="/icons/diamond.png"
            alt="boost"
            height={24}
            width={24}
          />
          Get Boost
        </button>
      </div>
      <div className="grid grid-cols-2 gap-10 w-full">
        {[1, 2].map((_item, index) => (
          <Post key={index} results />
        ))}
      </div>
    </div>
  );
};

export default MyResults;
