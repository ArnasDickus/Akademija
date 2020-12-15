import React, {useState} from 'react';
import classes from './subject-section.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import {CourseSectionInterface} from "core/interfaces/categories.interface";


const SubjectSections: React.FC<CourseSectionInterface> = ({ id, title, lessons, onUrlUpdate}) => {
    const [menu, toggleMenu] = useState(false);
    const [sectionId, setSectionId] = useState('');
    const [lessonId, setLessonId] = useState('');

    const handleClick = () => {
        toggleMenu(!menu)
    }

    const selectLesson = (lessonId: string, currentSectionId: string ) => {
        setLessonId(lessonId);

        console.log(currentSectionId);



        // console.log(sectionId);
        // console.log(currentSectionId);
        // setLessonId(lessonId);
        //
        // if(sectionId.length === 0) {
        //     console.log('return stop');
        //     return setSectionId(currentSectionId);
        // } else if (sectionId !== currentSectionId) {
        //     setSectionId(currentSectionId);
        // }

    }

    return (
        <React.Fragment>
            <div onClick={handleClick} className={classes.subjectSections}>
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
                            <div className={`${classes.dropdown} ${lesson.id === lessonId
                                ? `${classes.activeLesson}` : ''}`} key={lesson.id}
                                 onClick={() => onUrlUpdate(lesson.url)}>
                                <div onClick={() => selectLesson(lesson.id || '', id || '')} className={classes.rowDropdown}>
                                    <Checkbox
                                        value="checkedA"
                                        inputProps={{'aria-label': 'Checkbox A'}}
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
