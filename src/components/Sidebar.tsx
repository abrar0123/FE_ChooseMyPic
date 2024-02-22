import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineBookmark } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="w-[220px]">
      <Link href="/" className="flex items-center p-3 cursor-pointer">
        <Image
          src="/icons/vote.png"
          alt="vote"
          height={32}
          width={32}
          className="mr-4"
        />
        <span className="text-base font-candy">Vote</span>
      </Link>
      <Link
        href="/post-survey"
        className="flex items-center p-3 cursor-pointer"
      >
        <Image
          src="/icons/survey.png"
          alt="survey"
          height={32}
          width={32}
          className="mr-4"
        />
        <span className="text-base font-candy">Post a Survey</span>
      </Link>
      <div className="flex items-center p-3 cursor-pointer">
        <Image
          src="/icons/notifications.png"
          alt="notifications"
          height={32}
          width={32}
          className="mr-4"
        />
        <span className="text-base font-candy">Notifications</span>
      </div>
      <div className="flex items-center p-3 cursor-pointer">
        <Image
          src="/icons/messages.png"
          alt="messages"
          height={32}
          width={32}
          className="mr-4"
        />
        <span className="text-base font-candy">Messages</span>
      </div>
      <div className="flex items-center p-3 cursor-pointer">
        <Image
          src="/icons/subscriptions.png"
          alt="subscriptions"
          height={32}
          width={32}
          className="mr-4"
        />
        <span className="text-base font-candy">Subscriptions</span>
      </div>
      <div className="flex items-center p-3 cursor-pointer">
        <HiOutlineBookmark fontSize={32} className="mr-4 text-[#746bf5]" />
        <span className="text-base font-candy">Bookmarks</span>
      </div>
      <div className="flex items-center p-3 cursor-pointer">
        <Image
          src="/icons/profile.png"
          alt="profile"
          height={32}
          width={32}
          className="mr-4"
        />
        <span className="text-base font-candy">My Profile</span>
      </div>
    </div>
  );
};

export default Sidebar;
