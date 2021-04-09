import PracticeTests from 'components/practice-tests/practice-tests.component';
import { Categories } from 'core/fake-data/categories';
import { CourseSectionType, CoursesType } from 'core/types/categories.types';
// TODO Remove TS-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getVideoId from 'get-video-id';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { Options as YoutubeOptions } from 'react-youtube';
import { setCurrentOverview } from 'redux/overview/overview.actions';

import Carousel from '../../sections/carousel/carousel.section';
import SubjectSections from '../../sections/subject-section/subject-section.section';
import classes from './sections.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectionPage: React.FC<any> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [singleCourse, setSingleCourse] = useState<CoursesType>([] as any);
  const [showPracticeTest, setShowPracticeTest] = useState(false);
  const [url, setUrl] = useState<string>('');
  const [oldSectionId, setOldSectionId] = useState<string>('');
  const [currentTestData, setCurrentTestData] = useState({
    id: '',
    title: '',
    description: '',
    question: '',
  });
  const [initialUrl, setInitialUrl] = useState('');
  const [initialTestLoad, setInitialTestLoad] = useState(false);
  const [initialLessonLoad, setInitialLessonLoad] = useState(false);

  const [options] = useState<YoutubeOptions>({
    playerVars: {
      autoplay: 1,
      origin: 'http://localhost:3000',
    },
  });

  const getUrlVideoId = (): string => {
    const fullUrl = window.location.href;
    const segments = new URL(fullUrl).pathname.split('/');
    const id = segments.pop() || segments.pop();

    if (id) {
      return id;
    }

    return '';
  };

  const getCourseUrl = (): string => {
    // https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
    const urlToArray = window.location.pathname.split('/');
    const courseUrl = urlToArray[urlToArray.length - 2];

    return courseUrl;
  };

  useEffect(() => {
    const videoId = getUrlVideoId();
    setUrl(videoId);
    const courseUrl = getCourseUrl();
    setInitialUrl(videoId);

    // TODO Rewrite to improve performance https://www.bigocheatsheet.com/
    for (let i = 0; i < Categories.length; i++) {
      for (let j = 0; j < Categories[i].courses.length; j++) {
        if (Categories[i].courses[j].url === courseUrl) {
          setSingleCourse(Categories[i].courses[j]);
          props.setCurrentOverview(singleCourse);
        }
      }
    }
  }, [singleCourse]);

  const changeVideo = (videoUrl: string, previousSectionId: string): void => {
    if (previousSectionId === '') {
      setInitialLessonLoad(true);
    } else {
      setInitialLessonLoad(false);
    }

    setShowPracticeTest(false);
    setOldSectionId(previousSectionId);
    const idOnly = getVideoId(videoUrl).id;
    setUrl(idOnly);
  };

  const changeTest = (
    previousSectionId: string,
    testId: string,
    testTitle: string,
    testDescription: string,
    testQuestion: string,
  ): void => {
    if (previousSectionId === '') {
      setInitialTestLoad(true);
    } else {
      setInitialTestLoad(false);
    }

    setShowPracticeTest(true);
    setOldSectionId(previousSectionId);
    setCurrentTestData({
      ...currentTestData,
      id: testId,
      title: testTitle,
      description: testDescription,
      question: testQuestion,
    });
  };

  return (
    <div>
      <div className={classes.row}>
        <div className={classes.videoSide}>
          {!showPracticeTest ? (
            <div className={classes.youtubePlayerContainer}>
              <YouTube className={classes.youtubePlayer} opts={options} videoId={url} />
            </div>
          ) : (
            <PracticeTests testData={currentTestData} />
          )}
          <Carousel />
        </div>

        <div className={classes.content}>
          <div className={classes.textRow}>
            <p className={classes.courseContent}>Course content</p>
          </div>
          <div>
            {singleCourse.sections?.length &&
              singleCourse.sections.map((section: CourseSectionType) => (
                <React.Fragment key={section.id}>
                  <SubjectSections
                    id={section.id}
                    initialLessonLoad={initialLessonLoad}
                    initialTestLoad={initialTestLoad}
                    initialUrl={initialUrl}
                    lessons={section.lessons}
                    previousSectionId={oldSectionId}
                    tests={section.tests}
                    title={section.title}
                    onInitialLessonUrlUpdate={(url: string, previousSectionId: string) =>
                      changeVideo(url, previousSectionId)
                    }
                    onInitialTestUrlUpdate={(
                      previousSectionId: string,
                      testId: string,
                      testTitle: string,
                      testDescription: string,
                      testQuestion: string,
                    ) => {
                      changeTest(
                        previousSectionId,
                        testId,
                        testTitle,
                        testDescription,
                        testQuestion,
                      );
                    }}
                    onLessonUpdate={(url: string, previousSectionId: string) =>
                      changeVideo(url, previousSectionId)
                    }
                    onTestUpdate={(
                      previousSectionId: string,
                      testId: string,
                      testTitle: string,
                      testDescription: string,
                      testQuestion: string,
                    ) => {
                      changeTest(
                        previousSectionId,
                        testId,
                        testTitle,
                        testDescription,
                        testQuestion,
                      );
                    }}
                  />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrentOverview: (overview: any) => dispatch(setCurrentOverview(overview)),
});

export default connect(null, mapDispatchToProps)(SectionPage);
