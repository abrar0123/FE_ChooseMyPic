import MyResults from '@/components/MyResults';
import PostSurveyHeadButtons from '@/components/PostSurveyHeadButtons';
import PostSurveyImages from '@/components/PostSurveyImages';
import PostSurveyQuestion from '@/components/PostSurveyQuestion';
import React from 'react';

const PostSurvey = () => {
  return (
    <div
      className="flex flex-col items-center justify-between p-4 overflow-auto"
      style={{ height: 'calc(100vh - 120px)' }}
    >
      <div className="w-full">
        <PostSurveyHeadButtons />
        <PostSurveyQuestion />
        <PostSurveyImages />
        <MyResults />
      </div>
    </div>
  );
};

export default PostSurvey;
