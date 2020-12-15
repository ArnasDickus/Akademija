import React, {useState} from 'react';
import classes from './subject-section.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import {LessonsInterface} from "core/interfaces/categories.interface";

interface Props {
    id: string;
    title: string;
    lessons: LessonsInterface[];
    passUrl: any;
}

const SubjectSections: React.FC<Props> = ({ id, title, lessons, passUrl }) => {
    console.log(lessons);
    const [menu, toggleMenu] = useState(false);
    const [lessonId, setLessonId] = useState('');

    const handleClick = () => {
        toggleMenu(!menu)
    }

    const selectLesson = (id: string) => {
        setLessonId(id);
        console.log(id);
    }



    return (
        <React.Fragment>
            <div onClick={handleClick} className={classes.subjectSections}>
                <div className={classes.row}>
                    <div>
                        <h5 className={classes.title}>{ title }</h5>
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
                                 onClick={() => passUrl(lesson.url)}>
                                <div className={classes.rowDropdown} onClick={() => selectLesson(lesson.id || '')}>
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
