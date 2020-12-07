import React, {useState} from 'react';
import YouTube from 'react-youtube';
import classes from './single-course.module.scss';
import {CategoriesInterface} from "../../../../core/interfaces/categories.interface";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SubjectSections from "../../sections/subject-section/subject-section.section";

const SingleCourse: React.FC = () => {
    const [options,] = useState<any>({
        width: '1430',
        height: '647',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'autohide':1,
            'wmode':'opaque',
            'origin':'http://localhost:3000' }
    })



    return (
        <div>
            <div className={classes.row}>
                <div>
                    <YouTube videoId="0pThnRneDjw" opts={options} />
                </div>

                <div className={classes.content}>
                    <div className={classes.textRow}>
                        <p className={classes.courseContent}>Course content</p>
                        <div className={classes.xIcon}>
                            <FontAwesomeIcon  icon={faTimes}/>
                        </div>
                    </div>
                    <SubjectSections />
                </div>
            </div>
        </div>
    )
}

export default SingleCourse;
