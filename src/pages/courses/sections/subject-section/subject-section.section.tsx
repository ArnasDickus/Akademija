import React, {useState} from 'react';
import classes from './subject-section.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import {CourseSectionInterface} from "core/interfaces/categories.interface";


const SubjectSections: React.FC<CourseSectionInterface> = ({title, lessons, onUrlUpdate}) => {
    const [menu, toggleMenu] = useState(false);
    const [lessonId] = useState('');

    const handleClick = () => {
        toggleMenu(!menu)
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
                                <div className={classes.rowDropdown}>
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
