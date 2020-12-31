import React from 'react';
// import {Categories} from 'core/fake-data/categories';
// import CategoryTitle from "components/category-title/category-title";
// import CoursesCard from "components/category-card/category-card";
// import wrapper from 'baseScss/components/wrapper.module.scss';
// import {CategoriesType, CoursesType} from 'core/types/categories.types'

const CoursesPage: React.FC = () => {
    // const [singleCategory, setSingleCategory] = useState<CategoriesType | {}>({});

    // useEffect(() => {
    //     const categories = Categories;
    //     const fullUrl = window.location.href;
    //     const segments = new URL(fullUrl).pathname.split('/');
    //     const id = segments.pop() || segments.pop();

    //     for (const category of categories) {
    //         if (category.url === id) {
    //             setSingleCategory(category);
    //         }
    //     }
    // }, [singleCategory]);


    return (
        <div>
            <h2>Categorie</h2>
            {/* {
                singleCategory.courses !== [] ? (
                    <div>
                        <CategoryTitle title={singleCategory.title}/>

                        <div className={wrapper.headerWrapper}>
                            {singleCategory.courses?.length && singleCategory.courses.map((course: CoursesType) => (
                                    <React.Fragment key={course.id}>
                                        <CoursesCard
                                            about={course.about}
                                            description={course.description}
                                            img={course.img}
                                            sections={course.sections}
                                            title={course.title}
                                            url={course.url}
                                        />
                                    </React.Fragment>
                                )
                            )}
                        </div>
                    </div>
                ) : ''
            } */}
        </div>
    )
}

export default CoursesPage;
