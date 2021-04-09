import React from 'react';
import { TestWrapper } from 'styles/components/wrapper';

import * as S from './practice-tests.styles';

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
    <S.Container>
      <h1 className="title">{testData.title}</h1>
      <TestWrapper>
        <p>description: {testData.description}</p>
        <p>question: {testData.question}</p>
        <div className="row">
          <span>
            Stuck?
            <button className="videoButton">Watch a video or use a hint</button>
          </span>
          <button className="problemButton">Report a problem</button>
        </div>
      </TestWrapper>
    </S.Container>
  );
};

export default PracticeTests;
