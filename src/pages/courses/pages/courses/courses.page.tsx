import React, { useEffect, useState } from 'react';
import { Categories } from 'core/fake-data/categories';
import CategoryTitle from 'components/category-title/category-title';
import CoursesCard from 'components/category-card/category-card';
import wrapper from 'baseScss/components/wrapper.module.scss';
import { CoursesType } from 'core/types/categories.types';

const CoursesPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [singleCategory, setSingleCategory] = useState<any>({});

  useEffect(() => {
    const categories = Categories;
    const fullUrl = window.location.href;
    const segments = new URL(fullUrl).pathname.split('/');
    const id = segments.pop() || segments.pop();

    for (const category of categories) {
      if (category.url === id) {
        setSingleCategory(category);
      }
    }
  }, [singleCategory]);

  return (
    <React.Fragment>
      {singleCategory.courses !== [] ? (
        <div>
          <CategoryTitle title={singleCategory.title} />

          <div className={wrapper.headerWrapper}>
            {singleCategory.courses?.length &&
              singleCategory.courses.map((course: CoursesType) => (
                <React.Fragment key={course.id}>
                  <CoursesCard
                    about={course.about}
                    description={course.description}
                    img={course.img}
                    sections={course.sections}
                    title={course.title}
                    url={course.url}
                  />
                </React.Fragment>
              ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default CoursesPage;
