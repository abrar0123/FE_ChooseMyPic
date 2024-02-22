import React from 'react';

const PostSurveyQuestion = () => {
  return (
    <div className="my-10 flex items-center">
      <span className="mr-4 font-candy flex-shrink-0">
        Write your question:
      </span>
      <input
        className="bg-transparent font-candy outline-0 border-0 flex-1"
        placeholder="eg. what is my best picture for tinder?"
      />
    </div>
  );
};

export default PostSurveyQuestion;
