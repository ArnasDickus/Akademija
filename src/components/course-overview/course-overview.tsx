import React, {useEffect} from 'react';
import classes from './course-overview.module.scss';
import {setCurrentOverview} from "../../redux/overview/overview.actions";
import {connect} from 'react-redux';

const CourseOverview = (props: any) => {
    useEffect(() => {
      const {setCurrentOverview} = props;
      console.log(setCurrentOverview);
    })

    return (
        <div className={classes.overview}>
            <p>Course Overview</p>

        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    setCurrentOverview: (overview: any) => dispatch(setCurrentOverview(overview))
})

export default connect(null, mapDispatchToProps)(CourseOverview);

