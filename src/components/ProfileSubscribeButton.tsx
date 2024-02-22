import Image from 'next/image';
import React from 'react';

const ProfileSubscribeButton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-10 flex items-center justify-center gap-4">
        <Image src="/icons/tiktok.png" alt="tiktok" height={40} width={40} />
        <Image
          src="/icons/instagram.png"
          alt="instagram"
          height={40}
          width={40}
        />
        <Image
          src="/icons/snapchat.png"
          alt="snapchat"
          height={40}
          width={40}
        />
      </div>
      <button className="bg-[#00aff0] text-white px-10 py-2 rounded-full">
        Subscribe To See Private Survey
      </button>
    </div>
  );
};

export default ProfileSubscribeButton;
