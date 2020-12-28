import React, {useEffect} from 'react';
import classes from './course-overview.module.scss';
import { selectOverviewData } from "redux/overview/overview.selector";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

const CourseOverview: React.FC = (props) => {
    // @ts-ignore
    const {overview} = props;
    console.log(overview);

    useEffect(() => {

    })

    return (
        <div className={classes.overview}>
            <p>Course Overview</p>
            {overview.overviewData.about}
            {overview.overviewData.description}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    overview: selectOverviewData,
})

export default connect(mapStateToProps, null)(CourseOverview);

