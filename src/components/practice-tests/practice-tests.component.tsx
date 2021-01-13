import React from 'react';
// import classes from './practice-tests.module.scss';

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
    <div>
      <p>id: {testData.id}</p>
      <p>title: {testData.title}</p>
      <p>description: {testData.description}</p>
      <p>question: {testData.question}</p>
    </div>
  );
};

export default PracticeTests;
