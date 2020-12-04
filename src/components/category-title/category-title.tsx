import React from 'react';
import classes from './category-title.module.scss';

interface Props {
    title: string;
}

const CategoryTitle: React.FC<Props> = ({ title }) => {

    return (
        <div className={classes.background}>
            <h2 className={classes.title}>{ title }</h2>
        </div>
        )
}

export default CategoryTitle;
