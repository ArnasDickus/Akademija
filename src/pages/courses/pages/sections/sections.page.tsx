import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import classes from './sections.module.scss';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SubjectSections from "../../sections/subject-section/subject-section.section";
import {Categories} from 'core/fake-data/categories';
import {CourseSectionInterface, CoursesInterface} from "core/interfaces/categories.interface";
// TODO Remove TS-ignore
// @ts-ignore
import getVideoId from 'get-video-id';

const SectionPage: React.FC = () => {
    const [singleCourse, setSingleCourse] = useState<CoursesInterface>([] as any);
    const [url, setUrl] = useState<string>('');
    const [oldSectionId, setOldSectionId] = useState<string>('');
    const [options] = useState<any>({
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
                    setSingleCourse(Categories[i].courses[j]);

                    if (singleCourse?.sections?.length) {
                        setUrl(getVideoId(singleCourse.sections[0].lessons[0].url).id);
                    }
                }
            }
        }

    }, [singleCourse]);

    const changeVideo = (videoUrl: string, oldId: string): void => {
        setOldSectionId(oldId);
        const idOnly = getVideoId(videoUrl).id;
        setUrl(idOnly)
    }

    return (
        <div>
            <div className={classes.row}>
                <div className={classes.youtubePlayerContainer}>
                    <YouTube className={classes.youtubePlayer} videoId={url} opts={options}/>
                </div>

                <div className={classes.content}>
                    <div className={classes.textRow}>
                        <p className={classes.courseContent}>Course content</p>
                        <div className={classes.xIcon}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>
                    </div>
                    {
                        <div>
                            {
                                singleCourse.sections?.length && singleCourse.sections.map
                                ((section: CourseSectionInterface) => (
                                    <React.Fragment key={section.id}>
                                        <SubjectSections
                                            id={section.id}
                                            title={section.title}
                                            lessons={section.lessons}
                                            onUrlUpdate={(url: string, oldId: string) => changeVideo(url, oldId )}
                                            oldId={oldSectionId}
                                        />
                                    </React.Fragment>
                                ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionPage;
