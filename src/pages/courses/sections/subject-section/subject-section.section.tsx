import React, {useState} from 'react';
import classes from './subject-section.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';

const SubjectSections = () => {
    const [menu, toggleMenu] = useState(false);

    const handleClick = () => {
        toggleMenu(!menu)
    }

    return (
        <React.Fragment>
            <div onClick={handleClick} className={classes.subjectSections}>
                <div className={classes.row}>
                    <div>
                        <h5 className={classes.title}>Section 1 Introduction</h5>
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
                        <div className={classes.dropdown}>
                            <div className={classes.rowDropdown}>
                                <Checkbox
                                    value="checkedA"
                                    inputProps={{'aria-label': 'Checkbox A'}}
                                />
                                <span>React Concepts</span>
                            </div>
                            <span className={classes.time}>2 min</span>
                        </div>
                    ) : ''
            }
        </React.Fragment>
    )
}

export default SubjectSections;
