import wrapper from 'baseScss/components/wrapper.module.scss';
import CategoryTitle from 'components/shared/category-title/category-title';
import { Categories } from 'core/fake-data/categories';
import { CategoriesType } from 'core/types/categories.types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CourseCollections from '../../sections/courses-collection/courses-collection.section';

const CategoriesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CategoryTitle title={t('courses.allCourses')} />
      <div className={wrapper.headerWrapper}>
        <div>
          {Categories.map((category: CategoriesType) => (
            <CourseCollections
              key={category.id}
              courses={category.courses}
              id={category.id}
              title={category.title}
              url={category.url}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoriesPage;
