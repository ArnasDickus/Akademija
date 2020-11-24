import React from 'react';
import './courses.styles';
import { useTranslation } from "react-i18next";

const Courses: React.FC = () => {
    const { t } = useTranslation();

    return (
        <h1>{t('courses.allCourses')}</h1>
    )
}

export default Courses;
