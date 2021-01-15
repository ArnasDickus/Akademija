import React, { useEffect, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { Categories } from 'core/fake-data/categories';
import { CoursesType } from 'core/types/categories.types';
// TODO Remove TS-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getVideoId from 'get-video-id';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectionRedirectPage: React.FC<any> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [singleCourse, setSingleCourse] = useState<CoursesType>([] as any);
  const location = useLocation();

  useEffect(() => {
    const fullUrl = window.location.href;
    const segments = new URL(fullUrl).pathname.split('/');
    const id = segments.pop() || segments.pop();

    // TODO Rewrite to improve performance https://www.bigocheatsheet.com/
    for (let i = 0; i < Categories.length; i++) {
      for (let j = 0; j < Categories[i].courses.length; j++) {
        if (Categories[i].courses[j].url === id) {
          setSingleCourse(Categories[i].courses[j]);

          if (singleCourse?.sections?.length) {
            const urlLinkTest = getVideoId(singleCourse.sections[0].lessons[0].url).id;
            props.history.push(`${location.pathname}/${urlLinkTest}`);
          }
        }
      }
    }
  }, [singleCourse]);

  return <React.Fragment />;
};

export default withRouter(SectionRedirectPage);
