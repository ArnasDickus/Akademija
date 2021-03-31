import wrapper from 'baseScss/components/wrapper.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import { selectOverviewData } from 'redux/overview/overview.selector';
import { createStructuredSelector } from 'reselect';

import classes from './course-overview.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseOverview: React.FC<any> = (props) => {
  const { overview } = props;

  return (
    <div className={wrapper.overviewWrapper}>
      <p className={classes.title}>Course Overview</p>
      <p>{overview.overview.overviewData.about}</p>
      <hr />
      <div className={classes.row}>
        <p className={classes.descriptionTitle}>Description</p>
        <p>{overview.overview.overviewData.description}</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = createStructuredSelector<any, any>({
  overview: selectOverviewData,
});

export default connect(mapStateToProps, null)(CourseOverview);
