import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import classes from './single-course.module.scss';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SubjectSections from "../../sections/subject-section/subject-section.section";
import {Categories} from 'core/fake-data/categories';
import {CourseSectionInterface, CoursesInterface} from "core/interfaces/categories.interface";

const SingleCourse: React.FC = () => {
    const [singleSection, setSingleSection] = useState<CoursesInterface>([] as any);
    const [url, setUrl] = useState<string>('');
    const [options] = useState<any>({
        width: '1430',
        height: '647',
        playerVars: {
            'autoplay': 1,
            'origin': 'http://localhost:3000'
        }
    })

    useEffect(() => {
        const fullUrl = window.location.href;
        const segments = new URL(fullUrl).pathname.split('/');
        const id = segments.pop() || segments.pop();

        // TODO Rewrite to improve performance https://www.bigocheatsheet.com/
        for (let i = 0; i < Categories.length; i++) {
            for (let j = 0; j < Categories[i].courses.length; j++) {
                if (Categories[i].courses[j].url === id) {
                    setSingleSection(Categories[i].courses[j]);
                }
            }
        }
    }, [singleSection]);
    // TODO For some reason string is considered array. Typescript error.
    const changeVideo = (url: string | string[]): void => {
        if (typeof url === "string") {
            url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            url = (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
            setUrl(url);
        }
    }

    // @ts-ignore
    return (
        <div>
            <div className={classes.row}>
                <div>
                    <YouTube videoId={url} opts={options}/>
                </div>

                <div className={classes.content}>
                    <div className={classes.textRow}>
                        <p className={classes.courseContent}>Course content</p>
                        <div className={classes.xIcon}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>
                    </div>
                    {
                        singleSection.sections !== [] ? (
                            <div>
                                {
                                    // TODO fix Typescript bug
                                    // @ts-ignore
                                    singleSection.sections?.length > 0 && singleSection.sections?.map
                                    ((section: CourseSectionInterface) => (
                                        <React.Fragment key={section.id}>
                                            <SubjectSections
                                                // @ts-ignore
                                                id={section.id}
                                                title={section.title}
                                                lessons={section.lessons}
                                                // @ts-ignore
                                                passUrl={(url: string) => changeVideo(url)}

                                            />
                                        </React.Fragment>
                                    ))}
                            </div>
                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleCourse;
