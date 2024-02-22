import FollowersList from '@/components/FollowersList';
import Heading from '@/components/Heading';
import React from 'react';

const Followers = () => {
  return (
    <div>
      <Heading text="Followers" />
      <FollowersList />
    </div>
  );
};

export default Followers;
