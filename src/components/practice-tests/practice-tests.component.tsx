import wrapper from 'baseScss/components/wrapper.module.scss';
import React from 'react';

import classes from './practice-tests.module.scss';

type Props = {
  testData: {
    id: string;
    title: string;
    description: string;
    question: string;
  };
};

const PracticeTests: React.FC<Props> = ({ testData }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{testData.title}</h1>
      <div className={wrapper.testWrapper}>
        <p>description: {testData.description}</p>
        <p>question: {testData.question}</p>
        <div className={classes.row}>
          <span>
            Stuck?
            <button className={classes.videoButton}>Watch a video or use a hint</button>
          </span>
          <button className={classes.problemButton}>Report a problem</button>
        </div>
      </div>
    </div>
  );
};

export default PracticeTests;
