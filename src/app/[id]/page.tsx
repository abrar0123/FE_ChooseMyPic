import ProfileHead from '@/components/ProfileHead';
import ProfilePosts from '@/components/ProfilePosts';
import ProfileSubscribeButton from '@/components/ProfileSubscribeButton';
import React from 'react';

const Profile = () => {
  return (
    <div
      className="flex flex-col items-center justify-between p-4 overflow-auto"
      style={{ height: 'calc(100vh - 120px)' }}
    >
      <div className="w-full">
        <ProfileHead />
        <ProfileSubscribeButton />
        <ProfilePosts />
      </div>
    </div>
  );
};

export default Profile;
