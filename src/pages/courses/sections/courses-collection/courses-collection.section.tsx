import React from 'react';
import classes from './courses-collection.module.scss';

interface Props {
    title: string,
    lessons: string[]


}

const CourseCollections: React.FC<Props> = ({ title, lessons }) => {
    return (
        <div>
            <h2>{ title }</h2>
            { lessons.map(title => (
                <li>{ title }</li>
            ))}
        </div>
    )
}

export default CourseCollections;
