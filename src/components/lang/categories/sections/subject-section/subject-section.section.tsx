import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '@material-ui/core/Checkbox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { CourseSectionType } from 'core/types/categories.types';
// TODO Remove TS-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import getVideoId from 'get-video-id';
import React, { useEffect, useState } from 'react';

import * as S from './subject-section';
// import AllRoutesEnum from 'core/enums/allRoutes.enum';

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
  // const history = useHistory();
  // const location = useLocation();

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
    // eslint-disable-next-line no-console
    console.log(lessonUrl, 'test id');
    // const baseurl = location.pathname.replace(new RegExp('(.*/)[^/]+$'), '$1');

    // const shortUrl = getVideoId(lessonUrl).id;

    // if (location.hash === AllRoutesEnum.SEARCHHASH) {
    //   history.push({
    //     pathname: `${baseurl}${shortUrl}`,
    //     hash: AllRoutesEnum.SEARCHHASH,
    //   });
    // } else if (location.hash === AllRoutesEnum.OVERVIEWHASH) {
    //   history.push({
    //     pathname: `${baseurl}${shortUrl}`,
    //     hash: AllRoutesEnum.OVERVIEWHASH,
    //   });
    // } else if (location.hash === AllRoutesEnum.QAHASH) {
    //   history.push({
    //     pathname: `${baseurl}${shortUrl}`,
    //     hash: AllRoutesEnum.QAHASH,
    //   });
    // }
  };

  const changeUrlToTest = (testId: string) => {
    // eslint-disable-next-line no-console
    console.log(testId, 'test id');
    // const baseurl = location.pathname.replace(new RegExp('(.*/)[^/]+$'), '$1');

    // if (location.hash === AllRoutesEnum.SEARCHHASH) {
    //   history.push({
    //     pathname: `${baseurl}${testId}`,
    //     hash: AllRoutesEnum.SEARCHHASH,
    //   });
    // } else if (location.hash === AllRoutesEnum.OVERVIEWHASH) {
    //   history.push({
    //     pathname: `${baseurl}${testId}`,
    //     hash: AllRoutesEnum.OVERVIEWHASH,
    //   });
    // } else if (location.hash === AllRoutesEnum.QAHASH) {
    //   history.push({
    //     pathname: `${baseurl}${testId}`,
    //     hash: AllRoutesEnum.QAHASH,
    //   });
    // }
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
    <S.Container>
      <div className="subjectSections" onClick={handleClick}>
        <div className="row">
          <div>
            <h5 className="title">{title}</h5>
            <p className="subtitles">3/3 | 7min</p>
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
              className={`dropdown ${
                isLessonSelected &&
                lesson.id === lessonId &&
                (previousSectionId === id || initialLessonLoad)
                  ? `activeLesson`
                  : ''
              }`}
            >
              <div className="rowDropdown">
                <label>
                  <Checkbox inputProps={{ 'aria-label': 'Checkbox A' }} value="checkedA" />
                </label>
                <div
                  className="textContainer"
                  onClick={() => handleLessonClick(lesson.url, lesson.id || '', id || '')}
                >
                  <p className="listItemTitle">{lesson.title}</p>
                  <p className="time">
                    <PlayCircleFilledIcon className="icon" /> 2 min
                  </p>
                </div>
              </div>
            </div>
          ))
        : ''}
      {menu ? <h5 className="practiceTitle">Practice</h5> : ''}

      {menu
        ? tests?.map((test) => (
            <div
              key={test.id}
              className={`dropdown ${
                !isLessonSelected &&
                test.id === testId &&
                (previousSectionId === id || initialTestLoad)
                  ? `activeLesson`
                  : ''
              }`}
            >
              <div className="rowDropdown">
                <label>
                  <Checkbox inputProps={{ 'aria-label': 'Checkbox A' }} value="checkedA" />
                </label>
                <div
                  className="textContainer"
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
                  <p className="listItemTitle">{test.title}</p>
                  <p className="time">
                    <InsertDriveFileIcon className="icon" />2 min
                  </p>
                </div>
              </div>
            </div>
          ))
        : ''}
    </S.Container>
  );
};

export default SubjectSections;
