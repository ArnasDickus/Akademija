import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '@material-ui/core/Checkbox';
import { CourseSectionType } from 'core/types/categories.types';
// TODO Remove TS-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getVideoId from 'get-video-id';
import { useHistory, useLocation } from 'react-router-dom';

import classes from './subject-section.module.scss';

type Props = CourseSectionType & {
  onLessonUpdate: (url: string, previousSectionId: string) => void;
} & {
  onTestUpdate: (
    previousSectionId: string,
    testId: string,
    testTitle: string,
    testDescription: string,
    testQuestion: string,
  ) => void;
} & {
  onInitialTestUrlUpdate: (
    previousSectionId: string,
    testId: string,
    testTitle: string,
    testDescription: string,
    testQuestion: string,
  ) => void;
} & {
  onInitialLessonUrlUpdate: (lessonId: string, currentSectionId: string) => void;
} & {
  initialUrl: string;
  initialTestLoad: boolean;
};

const SubjectSections: React.FC<Props> = ({
  id,
  title,
  lessons,
  tests,
  initialUrl,
  initialTestLoad,
  onLessonUpdate,
  onTestUpdate,
  onInitialTestUrlUpdate,
  previousSectionId,
}) => {
  const [menu, toggleMenu] = useState(false);
  const [isLessonSelected, selectLesson] = useState(false);
  const [lessonId, setLessonId] = useState('');
  const [testId, setTestId] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleInitialLesson = () => {
    tests?.forEach((test) => {
      if (test.id === initialUrl) {
        selectLesson(false);
        setTestId(initialUrl);
        onInitialTestUrlUpdate('', test.id, test.title, test.description, test.question);
      }
    });

    lessons.forEach((lesson) => {
      if (getVideoId(lesson.url).id === initialUrl) {
        selectLesson(true);
        setLessonId(lesson.id);
      }
    });
  };

  useEffect(() => {
    handleInitialLesson();
  }, []);
  const handleClick = () => {
    toggleMenu(!menu);
  };

  const changeUrlToLesson = (lessonUrl: string) => {
    const baseurl = location.pathname.replace(new RegExp('(.*/)[^/]+$'), '$1');

    const shortUrl = getVideoId(lessonUrl).id;

    history.push({
      pathname: `${baseurl}${shortUrl}`,
    });
  };

  const changeUrlToTest = (testId: string) => {
    const baseurl = location.pathname.replace(new RegExp('(.*/)[^/]+$'), '$1');

    history.push({
      pathname: `${baseurl}${testId}`,
    });
  };

  const handleLessonClick = (lessonUrl: string, lessonId: string, currentSectionId: string) => {
    selectLesson(true);
    onLessonUpdate(lessonUrl, currentSectionId);
    setLessonId(lessonId);
    changeUrlToLesson(lessonUrl);
  };

  const handleTestClick = (
    testId: string,
    currentSectionId: string,
    testTitle: string,
    testDescription: string,
    testQuestion: string,
  ) => {
    selectLesson(false);
    onTestUpdate(currentSectionId, testId, testTitle, testDescription, testQuestion);
    setTestId(testId);
    changeUrlToTest(testId);
  };

  return (
    <React.Fragment>
      <div className={classes.subjectSections} onClick={handleClick}>
        <div className={classes.row}>
          <div>
            <h5 className={classes.title}>{title}</h5>
            <p className={classes.subtitles}>3/3 | 7min</p>
          </div>

          <div>
            {menu ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} />}
          </div>
        </div>
      </div>

      {menu
        ? lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`${classes.dropdown} ${
                isLessonSelected && lesson.id === lessonId ? `${classes.activeLesson}` : ''
              }`}
              onClick={() => handleLessonClick(lesson.url, lesson.id || '', id || '')}
            >
              <div className={classes.rowDropdown}>
                <Checkbox inputProps={{ 'aria-label': 'Checkbox A' }} value="checkedA" />
                <span>{lesson.title}</span>
              </div>
              <span className={classes.time}>2 min</span>
            </div>
          ))
        : ''}
      {menu ? <h5 className={classes.practiceTitle}>Practice</h5> : ''}

      {menu
        ? tests?.map((test) => (
            <div
              key={test.id}
              className={`${classes.dropdown} ${
                !isLessonSelected &&
                test.id === testId &&
                (previousSectionId === id || initialTestLoad)
                  ? `${classes.activeLesson}`
                  : ''
              }`}
              onClick={() =>
                handleTestClick(
                  test.id || '',
                  id || '',
                  test.title,
                  test?.description,
                  test.question,
                )
              }
            >
              <div className={classes.rowDropdown}>
                <Checkbox inputProps={{ 'aria-label': 'Checkbox A' }} value="checkedA" />
                <span>{test.title}</span>
              </div>
              <span className={classes.time}>2 min</span>
            </div>
          ))
        : ''}
    </React.Fragment>
  );
};

export default SubjectSections;
