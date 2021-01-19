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
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AllRoutesEnum from 'core/enums/allRoutes.enum';

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
  initialLessonLoad: boolean;
};

const SubjectSections: React.FC<Props> = ({
  id,
  title,
  lessons,
  tests,
  initialUrl,
  initialTestLoad,
  initialLessonLoad,
  onLessonUpdate,
  onInitialLessonUrlUpdate,
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
        onInitialLessonUrlUpdate(lesson.url, '');
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

    if (location.hash === AllRoutesEnum.SEARCHHASH) {
      history.push({
        pathname: `${baseurl}${shortUrl}`,
        hash: AllRoutesEnum.SEARCHHASH,
      });
    } else if (location.hash === AllRoutesEnum.OVERVIEWHASH) {
      history.push({
        pathname: `${baseurl}${shortUrl}`,
        hash: AllRoutesEnum.OVERVIEWHASH,
      });
    } else if (location.hash === AllRoutesEnum.QAHASH) {
      history.push({
        pathname: `${baseurl}${shortUrl}`,
        hash: AllRoutesEnum.QAHASH,
      });
    }
  };

  const changeUrlToTest = (testId: string) => {
    const baseurl = location.pathname.replace(new RegExp('(.*/)[^/]+$'), '$1');

    if (location.hash === AllRoutesEnum.SEARCHHASH) {
      history.push({
        pathname: `${baseurl}${testId}`,
        hash: AllRoutesEnum.SEARCHHASH,
      });
    } else if (location.hash === AllRoutesEnum.OVERVIEWHASH) {
      history.push({
        pathname: `${baseurl}${testId}`,
        hash: AllRoutesEnum.OVERVIEWHASH,
      });
    } else if (location.hash === AllRoutesEnum.QAHASH) {
      history.push({
        pathname: `${baseurl}${testId}`,
        hash: AllRoutesEnum.QAHASH,
      });
    }
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
                isLessonSelected &&
                lesson.id === lessonId &&
                (previousSectionId === id || initialLessonLoad)
                  ? `${classes.activeLesson}`
                  : ''
              }`}
            >
              <div className={classes.rowDropdown}>
                <label>
                  <Checkbox inputProps={{ 'aria-label': 'Checkbox A' }} value="checkedA" />
                </label>
                <div
                  className={classes.textContainer}
                  onClick={() => handleLessonClick(lesson.url, lesson.id || '', id || '')}
                >
                  <p className={classes.listItemTitle}>{lesson.title}</p>
                  <p className={classes.time}>
                    <PlayCircleFilledIcon className={classes.icon} /> 2 min
                  </p>
                </div>
              </div>
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
            >
              <div className={classes.rowDropdown}>
                <label>
                  <Checkbox inputProps={{ 'aria-label': 'Checkbox A' }} value="checkedA" />
                </label>
                <div
                  className={classes.textContainer}
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
                  <p className={classes.listItemTitle}>{test.title}</p>
                  <p className={classes.time}>
                    <InsertDriveFileIcon className={classes.icon} />2 min
                  </p>
                </div>
              </div>
            </div>
          ))
        : ''}
    </React.Fragment>
  );
};

export default SubjectSections;
