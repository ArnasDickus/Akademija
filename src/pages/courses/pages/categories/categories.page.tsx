import React from 'react';
import {useTranslation} from "react-i18next";
import CourseCollections from "../../sections/courses-collection/courses-collection.section";
import wrapper from 'baseScss/components/wrapper.module.scss';
import {Categories} from "core/fake-data/categories";
import {CategoriesInterface} from "core/interfaces/categories.interface";

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
                            id={category.id}
                            title={category.title}
                            courses={category.courses}
                            url={category.url}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesPage;
