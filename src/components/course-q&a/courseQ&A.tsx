import wrapper from 'baseScss/components/wrapper.module.scss';
import React from 'react';

import SearchBar from '../ui/search-bar/search-bar.component';

const CourseQuestionsAnswers: React.FC = () => {
  return (
    <div className={wrapper.overviewWrapper}>
      <SearchBar />
      <p>Questions and answers</p>
    </div>
  );
};

export default CourseQuestionsAnswers;
