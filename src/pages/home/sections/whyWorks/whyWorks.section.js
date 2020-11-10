import React from 'react';

import classes from './whyWorks.module.scss';

const WhyWorks = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Kodėl Akademija veikia?</h2>
            <div className={classes.wrapper}>
                <div className={classes.row}>
                    <div>
                        <p>Priežastis 1</p>
                    </div>

                    <div>
                        <p>Priežastis 2</p>
                    </div>

                    <div>
                        <p>Priežastis 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyWorks;
