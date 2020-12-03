import React, {useEffect, useState} from 'react';
import {Categories} from '../../../../core/fake-data/categories';

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
                        <h2>  {singleCategory.title}</h2>
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
