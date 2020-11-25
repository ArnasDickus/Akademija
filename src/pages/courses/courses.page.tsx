import React from 'react';
import classes from './courses.module.scss';
import { useTranslation } from "react-i18next";
import CourseCollections from "./sections/courses-collection/courses-collection.section";

const Courses: React.FC = () => {
    const { t } = useTranslation();
    const mathPreK = ['Up to 1st Grade (Khan kids)', '2nd Grade', '3rd Grade', '4th Grade'];
    const mathHighSchool = ['Algebra', 'Geometry', 'Algebra2', 'Trigonometry'];

    return (
        <div className={classes.wrapper}>
            <h1>{t('courses.allCourses')}</h1>

            <CourseCollections
                title={'Math: Pre-K - 8th Grade'}
                lessons={mathPreK} />
            <CourseCollections
                title={'Math: High School & College'}
                lessons={mathHighSchool} />
        </div>
    )
}

export default Courses;
