import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Categories} from 'core/fake-data/categories';
import {CourseSectionType, CoursesType} from "core/types/categories.types";
// TODO Remove TS-ignore
// @ts-ignore
import getVideoId from 'get-video-id';
import {connect} from 'react-redux';
import {setCurrentOverview} from "redux/overview/overview.actions";

import Carousel from "../../sections/carousel/carousel.section";
import SubjectSections from "../../sections/subject-section/subject-section.section";

import classes from './sections.module.scss';

const SectionPage: React.FC<any> = (props) => {
    const [singleCourse, setSingleCourse] = useState<CoursesType>([] as any);
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
                    props.setCurrentOverview(singleCourse);

                    if (singleCourse?.sections?.length) {
                        setUrl(getVideoId(singleCourse.sections[0].lessons[0].url).id);
                    }
                }
            }
        }

    }, [singleCourse, props]);

    const changeVideo = (videoUrl: string, oldId: string): void => {
        setOldSectionId(oldId);
        const idOnly = getVideoId(videoUrl).id;
        setUrl(idOnly)
    }

    return (
        <div>
            <div className={classes.row}>
                <div className={classes.videoSide}>
                    <div className={classes.youtubePlayerContainer}>
                        <YouTube className={classes.youtubePlayer} opts={options} videoId={url}/>
                    </div>

                    <Carousel />
                </div>

                <div className={classes.content}>
                    <div className={classes.textRow}>
                        <p className={classes.courseContent}>Course content</p>
                        <div className={classes.xIcon}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>
                    </div>
                    <div>
                            {
                                singleCourse.sections?.length && singleCourse.sections.map
                                ((section: CourseSectionType) => (
                                    <React.Fragment key={section.id}>
                                        <SubjectSections
                                            id={section.id}
                                            lessons={section.lessons}
                                            oldId={oldSectionId}
                                            title={section.title}
                                            onUrlUpdate={(url: string, oldId: string) => changeVideo(url, oldId )}
                                        />
                                    </React.Fragment>
                                ))}
                        </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    setCurrentOverview: (overview: any) => dispatch(setCurrentOverview(overview))
})

export default connect(null, mapDispatchToProps)(SectionPage);
