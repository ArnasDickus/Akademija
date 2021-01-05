import React from 'react';
import wrapper from 'baseScss/components/wrapper.module.scss';

import classes from './category-title.module.scss';

type Props = {
    title: string;
}

const CategoryTitle: React.FC<Props> = ({title}) => {

    return (
        <div className={classes.background}>
            <div className={wrapper.headerWrapper}>
                <h2 className={classes.title}>{title}</h2>
            </div>
        </div>
    )
}

export default CategoryTitle;
