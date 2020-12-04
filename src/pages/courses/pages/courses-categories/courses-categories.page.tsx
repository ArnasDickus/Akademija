import React, {useEffect, useState} from 'react';
import { Categories } from '../../../../core/fake-data/categories';
import CategoryTitle from "../../../../components/category-title/category-title";
import CategoryCard from "../../../../components/category-card/category-card";
import wrapper from '../../../../baseScss/components/wrapper.module.scss';
import { CategoriesInterface , CoursesInterface } from '../../../../core/interfaces/categories.interface'

const CoursesCategories: React.FC = () => {
    const [singleCategory, setSingleCategory] = useState<CategoriesInterface>([] as any);

    useEffect(() => {
        const fullUrl = window.location.href;
        const segments = new URL(fullUrl).pathname.split('/');
        const id = segments.pop() || segments.pop();

        for (let category of Categories ) {
            if (category.url === id) {
                setSingleCategory(category);
                console.log(singleCategory)
            }
        }
    }, [singleCategory]);


    return (
        <div>
            {
                singleCategory.courses !== [] ? (
                    <div>
                        <CategoryTitle title={singleCategory.title} />

                        <div className={wrapper.headerWrapper}>
                            {/*{*/}
                            {/*    singleCategory.courses.map((course: CoursesInterface) => (*/}
                            {/*        <CategoryCard title={course.title} key={course.id} />*/}
                            {/*        )*/}
                            {/*    )*/}
                            {/*}*/}

                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default CoursesCategories;
