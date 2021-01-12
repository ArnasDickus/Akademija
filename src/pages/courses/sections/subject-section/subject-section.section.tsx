import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '@material-ui/core/Checkbox';
import { CourseSectionType } from 'core/types/categories.types';

import classes from './subject-section.module.scss';

type Props = CourseSectionType & { onUrlUpdate: (url: string, oldId: string) => void };

const SubjectSections: React.FC<Props> = ({ id, title, lessons, tests, onUrlUpdate, oldId }) => {
  const [menu, toggleMenu] = useState(false);
  const [isLessonSelected, selectLesson] = useState(false);
  const [lessonId, setLessonId] = useState('');
  const [testId, setTestId] = useState('');

  const handleClick = () => {
    toggleMenu(!menu);
  };

  const handleLessonClick = (lessonUrl: string, lessonId: string, currentSectionId: string) => {
    selectLesson(true);
    onUrlUpdate(lessonUrl, currentSectionId);
    setLessonId(lessonId);
  };

  const handleTestClick = (testUrl: string, testId: string, currentSectionId: string) => {
    selectLesson(false);
    onUrlUpdate(testUrl, currentSectionId);
    setTestId(testId);
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
                isLessonSelected && lesson.id === lessonId && oldId === id
                  ? `${classes.activeLesson}`
                  : ''
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
                !isLessonSelected && test.id === testId && oldId === id
                  ? `${classes.activeLesson}`
                  : ''
              }`}
              onClick={() => handleTestClick(test.url, test.id || '', id || '')}
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
