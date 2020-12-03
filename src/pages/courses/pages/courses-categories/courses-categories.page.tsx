import React, { useEffect } from 'react';
import { Courses } from '../../../../core/fake-data/courses';


const CoursesCategories: React.FC = () => {


    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () =>  {
        const fullUrl = window.location.href;
        const segments = new URL(fullUrl).pathname.split('/');
        const id = segments.pop() || segments.pop();
    }

    return (
        <div>
            <h1>Math course</h1>
        </div>
    )
}

export default CoursesCategories;

// Lets think this through:
// When clicking on course I get course url. Example k-8-grades.
// I could take that url and match it with fake data.
