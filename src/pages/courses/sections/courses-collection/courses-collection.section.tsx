import React from 'react';
import classes from './courses-collection.module.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import AllRoutesEnum from "../../../../core/enums/allRoutes.enum";
import {CategoriesInterface} from "../../../../core/interfaces/categories.interface";


const CourseCollections: React.FC<CategoriesInterface> = ({ title, courses, url }) => {
    return (
        <div className={classes.courseCollections}>
            <p className={classes.title}>
                <NavLink to={`/${AllRoutesEnum.COURSES}/${url}`}>{ title }</NavLink>
            </p>
            <div className={classes.row}>
                { courses.map(course => (
                <Card className={classes.root} key={course.id}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                { course.title }
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
