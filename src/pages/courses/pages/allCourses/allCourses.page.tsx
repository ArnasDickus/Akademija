import React from 'react';
import { useTranslation } from "react-i18next";
import CourseCollections from "../../sections/courses-collection/courses-collection.section";
import classes from './allCourses.module.scss';
import { Categories } from "../../../../core/fake-data/categories";

const AllCourses: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.wrapper}>
            <h1>{t('courses.allCourses')}</h1>

            <div>
                {
                    Categories.map(category => (
                        <CourseCollections
                            title={category.title}
                            key={category.id}
                            courses={category.courses}
                            url={category.url}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AllCourses;
