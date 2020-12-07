import React, {useState} from 'react';
import classes from './subject-section.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

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
            <Checkbox
                value="checkedA"
                inputProps={{ 'aria-label': 'Checkbox A' }}
            />
            <p>React Concepts</p>
            <p>2min</p>
        </React.Fragment>

    )
}

export default SubjectSections;
