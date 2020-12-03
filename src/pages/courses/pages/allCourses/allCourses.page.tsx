import React from 'react';
import { useTranslation } from "react-i18next";
import CourseCollections from "../../sections/courses-collection/courses-collection.section";
import classes from './allCourses.module.scss';
import { Courses } from "../../../../core/fake-data/courses";

const AllCourses: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <h1>{t('courses.allCourses')}</h1>

            <div>
                {
                    Courses.map(course => (
                        <CourseCollections
                            title={course.title}
                            key={course.id}
                            courses={course.subjects}
                            url={course.url}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AllCourses;
