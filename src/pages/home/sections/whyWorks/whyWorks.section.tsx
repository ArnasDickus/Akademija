import React from 'react';
import classes from './whyWorks.module.scss';
import { useTranslation } from "react-i18next";

const WhyWorks: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{t('whyWorks.title')}</h2>
            <div className={classes.wrapper}>
                <div className={classes.row}>
                    <div>
                        <p>{t('whyWorks.reason1')}</p>
                    </div>

                    <div>
                        <p>{t('whyWorks.reason2')}</p>
                    </div>

                    <div>
                        <p>{t('whyWorks.reason3')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyWorks;
