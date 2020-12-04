import React from 'react';
import classes from './category-title.module.scss';
import wrapper from '../../baseScss/components/wrapper.module.scss';

interface Props {
    title: string;
}

const CategoryTitle: React.FC<Props> = ({ title }) => {

    return (
        <div className={classes.background}>
            <div className={wrapper.headerWrapper}>
                <h2 className={classes.title}>{ title }</h2>
            </div>
        </div>
        )
}

export default CategoryTitle;
