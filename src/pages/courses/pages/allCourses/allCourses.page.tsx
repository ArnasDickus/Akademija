import React from 'react';
import { useTranslation } from "react-i18next";
import CourseCollections from "../../sections/courses-collection/courses-collection.section";
import classes from './allCourses.module.scss';

const mathPreK = [
    {
        id: '1',
        title: 'Up to 1st Grade (Khan kids)'
    },
    {
        id: '2',
        title: '2nd Grade'
    },
    {
        id: '3',
        title: '3rd Grade'
    },
    {
        id: '4',
        title: '4th Grade'
    },
]

const mathHighSchool = [
    {
        id: '1',
        title: 'Algebra'
    },
    {
        id: '2',
        title: 'Geometry'
    },
    {
        id: '3',
        title: 'Algebra2'
    },
    {
        id: '4',
        title: 'Trigonometry'
    },
]

const AllCourses: React.FC = () => {
    const { t } = useTranslation();

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

export default AllCourses;
