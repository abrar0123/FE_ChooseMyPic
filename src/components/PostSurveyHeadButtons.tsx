import React from 'react';

const PostSurveyHeadButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="w-full flex flex-col items-center justify-center">
        <h6 className="font-candy mb-4">Choose your Theme</h6>
        <button className="w-full bg-[#D9D9D9] font-candy p-4 text-black">
          Social Media
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h6 className="font-candy mb-4">Choose your Visibility</h6>
        <button className="w-full bg-[#D9D9D9] font-candy p-4 text-black">
          Public
        </button>
      </div>
    </div>
  );
};

export default PostSurveyHeadButtons;
