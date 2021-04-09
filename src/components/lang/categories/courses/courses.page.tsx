import CoursesCard from 'components/lang/categories/courses/components/category-card/category-card';
import CategoryTitle from 'components/shared/category-title/category-title';
import { Categories } from 'core/fake-data/categories';
import { CoursesType } from 'core/types/categories.types';
import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from 'styles/components/wrapper';

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

          <HeaderWrapper>
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
          </HeaderWrapper>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default CoursesPage;
