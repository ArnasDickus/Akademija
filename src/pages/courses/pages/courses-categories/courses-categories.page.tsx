import React, {useEffect, useState} from 'react';
import { Categories } from '../../../../core/fake-data/categories';
import CategoryTitle from "../../../../components/category-title/category-title";

const CoursesCategories: React.FC = () => {
    const [singleCategory, setSingleCategory]: any = useState([])

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
                singleCategory !== [] ? (
                    <div>
                        <div>

                        </div>
                        <CategoryTitle title={singleCategory.title} />

                        <div>
                        {/*     Create additional component */}
                        </div>

                    </div>
                ) : ''
            }
        </div>
    )
}

export default CoursesCategories;
