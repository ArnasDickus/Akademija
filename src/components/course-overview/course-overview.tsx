import React from 'react';
import { connect } from 'react-redux';
import { selectOverviewData } from 'redux/overview/overview.selector';
import { createStructuredSelector } from 'reselect';
import { OverviewWrapper } from 'styles/components/wrapper';

import * as S from './course-overview.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseOverview: React.FC<any> = (props) => {
  const { overview } = props;

  return (
    <OverviewWrapper>
      <S.Container>
        <p className="title">Course Overview</p>
        <p>{overview.overview.overviewData.about}</p>
        <hr />
        <div className="row">
          <p className="descriptionTitle">Description</p>
          <p>{overview.overview.overviewData.description}</p>
        </div>
      </S.Container>
    </OverviewWrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = createStructuredSelector<any, any>({
  overview: selectOverviewData,
});

export default connect(mapStateToProps, null)(CourseOverview);
