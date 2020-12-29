import React from 'react';
import {useTranslation} from "react-i18next";
import wrapper from 'baseScss/components/wrapper.module.scss';
import {Categories} from "core/fake-data/categories";
import {CategoriesInterface} from "core/interfaces/categories.interface";

import CourseCollections from "../../sections/courses-collection/courses-collection.section";

const CategoriesPage: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={wrapper.headerWrapper}>
            <h1>{t('courses.allCourses')}</h1>

            <div>
                {
                    Categories.map((category: CategoriesInterface) => (
                        <CourseCollections
                            key={category.id}
                            courses={category.courses}
                            id={category.id}
                            title={category.title}
                            url={category.url}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesPage;
