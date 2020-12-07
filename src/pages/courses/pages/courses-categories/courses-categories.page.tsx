import React, {useEffect, useState} from 'react';
import {Categories} from 'core/fake-data/categories';
import CategoryTitle from "components/category-title/category-title";
import CategoryCard from "components/category-card/category-card";
import wrapper from 'baseScss/components/wrapper.module.scss';
import {CategoriesInterface, CoursesInterface} from 'core/interfaces/categories.interface'

const CoursesCategories: React.FC = () => {
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
                            {singleCategory.courses?.length > 0 && singleCategory.courses?.map((course: CoursesInterface) => (
                                    <React.Fragment key={course.id}>
                                        <CategoryCard
                                            title={course.title}
                                            description={course.description}
                                            img={course.img}
                                            url={course.url}/>
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

export default CoursesCategories;
