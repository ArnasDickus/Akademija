import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import {CourseSectionInterface} from "core/interfaces/categories.interface";

import classes from './subject-section.module.scss';


const SubjectSections: React.FC<CourseSectionInterface> = ({
                                                               id,
                                                               title,
                                                               lessons,
                                                               onUrlUpdate,
                                                               oldId}) => {
    const [menu, toggleMenu] = useState(false);
    const [lessonId, setLessonId] = useState('');

    const handleClick = () => {
        toggleMenu(!menu)
    }


    const handleLessonClick = (lessonUrl: string, lessonId: string, currentSectionId: string) => {
        onUrlUpdate(lessonUrl, currentSectionId)
        setLessonId(lessonId);
    }

    return (
        <React.Fragment>
            <div className={classes.subjectSections} onClick={handleClick}>
                <div className={classes.row}>
                    <div>
                        <h5 className={classes.title}>{title}</h5>
                        <p className={classes.subtitles}>3/3 | 7min</p>
                    </div>

                    <div>
                        {
                            menu ?
                                <FontAwesomeIcon icon={faArrowDown}/>
                                : <FontAwesomeIcon icon={faArrowUp}/>
                        }
                    </div>
                </div>
            </div>

            {
                menu ?
                    (
                        lessons.map((lesson) => (
                            <div key={lesson.id} className={`${classes.dropdown} ${lesson.id === lessonId && oldId === id
                                ? `${classes.activeLesson}` : ''}`}
                                 onClick={() => handleLessonClick(lesson.url, lesson.id || '', id || '')}>
                                <div className={classes.rowDropdown}>
                                    <Checkbox
                                        inputProps={{'aria-label': 'Checkbox A'}}
                                        value="checkedA"
                                    />
                                    <span>{lesson.title}</span>
                                </div>
                                <span className={classes.time}>2 min</span>
                            </div>
                        ))
                    ) : ''
            }
        </React.Fragment>
    )
}

export default SubjectSections;
