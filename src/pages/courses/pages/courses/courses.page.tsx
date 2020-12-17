import React, {useEffect, useState} from 'react';
import {Categories} from 'core/fake-data/categories';
import CategoryTitle from "components/category-title/category-title";
import CoursesCard from "components/category-card/category-card";
import wrapper from 'baseScss/components/wrapper.module.scss';
import {CategoriesInterface, CoursesInterface} from 'core/interfaces/categories.interface'

const CoursesPage: React.FC = () => {
    const [singleCategory, setSingleCategory] = useState<CategoriesInterface>([] as any);

    useEffect(() => {
        const categories = Categories;
        const fullUrl = window.location.href;
        const segments = new URL(fullUrl).pathname.split('/');
        const id = segments.pop() || segments.pop();

        for (let category of categories) {
            if (category.url === id) {
                setSingleCategory(category);
            }
        }
    }, [singleCategory]);


    return (
        <div>
            {
                singleCategory.courses !== [] ? (
                    <div>
                        <CategoryTitle title={singleCategory.title}/>

                        <div className={wrapper.headerWrapper}>
                            {singleCategory.courses?.length && singleCategory.courses.map((course: CoursesInterface) => (
                                    <React.Fragment key={course.id}>
                                        <CoursesCard
                                            title={course.title}
                                            about={course.about}
                                            description={course.description}
                                            img={course.img}
                                            url={course.url}
                                            sections={course.sections}
                                        />
                                    </React.Fragment>
                                )
                            )}
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default CoursesPage;
