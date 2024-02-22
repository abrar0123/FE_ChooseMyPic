import React from 'react';
import Post from './Post';

const ProfilePosts = () => {
  const arr = [1, 2, 3];

  return (
    <div className="grid grid-cols-2 gap-10 my-10">
      {arr.map((item, index) => (
        <Post key={index} locked={item === 3} />
      ))}
    </div>
  );
};

export default ProfilePosts;
