import React from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';
// import { selectOverviewData } from "redux/overview/overview.selector";
// import {connect} from 'react-redux';
// import {createStructuredSelector} from "reselect";

import classes from './course-overview.module.scss';

const CourseOverview: React.FC = () => {
    // const {overview} = props;

    return (
        <div className={wrapper.overviewWrapper}>
            <p className={classes.title}>Course Overview</p>
            {/* <p>{overview.overviewData.about}</p> */}
            <hr />
            <div className={classes.row}>
                <p className={classes.descriptionTitle}>Description</p>
                {/* <p>{overview.overviewData.description}</p> */}
            </div>
        </div>
    )
}

// const mapStateToProps = createStructuredSelector({
//     overview: selectOverviewData,
// })

// export default connect(mapStateToProps, null)(CourseOverview);
export default CourseOverview;
