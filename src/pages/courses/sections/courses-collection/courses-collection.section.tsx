import React from 'react';
import classes from './courses-collection.module.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
    title: string,
    lessons: string[];
}

const CourseCollections: React.FC<Props> = ({ title, lessons }) => {
    return (
        <div className={classes.courseCollections}>
            <h2>{ title }</h2>
            <div className={classes.row}>
                { lessons.map(title => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                { title }
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
