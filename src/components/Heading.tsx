import React, { FC } from 'react';

interface Props {
  text: string;
}

const Heading: FC<Props> = ({ text }) => {
  return <div className="text-3xl text-center my-10">{text}</div>;
};

export default Heading;
