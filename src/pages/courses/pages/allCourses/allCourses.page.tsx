import React from 'react';
import {useTranslation} from "react-i18next";
import CourseCollections from "../../sections/courses-collection/courses-collection.section";
import wrapper from 'baseScss/components/wrapper.module.scss';
import {Categories} from "../../../../core/fake-data/categories";
import {CategoriesInterface} from "../../../../core/interfaces/categories.interface";

const AllCourses: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={wrapper.headerWrapper}>
            <h1>{t('courses.allCourses')}</h1>

            <div>
                {
                    Categories.map((category: CategoriesInterface) => (
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
