import React from 'react';
import classes from './courses-collection.module.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
    title: string,
    lessons: { id: string, title: string }[]

}

const CourseCollections: React.FC<Props> = ({ title, lessons }) => {
    return (
        <div className={classes.courseCollections}>
            <p className={classes.title}>{ title }</p>
            <div className={classes.row}>
                { lessons.map(lesson => (
                <Card className={classes.root} key={lesson.id}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                { lesson.title }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                ))}
            </div>
        </div>
    )
}

export default CourseCollections;
