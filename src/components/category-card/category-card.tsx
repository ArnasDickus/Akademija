import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import coursesImg from 'assets/course-placeholder.jpg';
import {CoursesInterface} from "core/interfaces/categories.interface";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";

import classes from './category-card.module.scss';

const CoursesCard: React.FC<CoursesInterface> = ({title, description, img, url}) => {
    const currentRoute = useLocation().pathname;

    return (
        <NavLink to={`${currentRoute}/${url}`}>
            <Card className={classes.card}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={coursesImg}
                                title={title}
                            />
                        </CardActionArea>
                    </div>

                    <div className={classes.colText}>
                        <CardActionArea>
                            <CardContent>
                                <Typography component="h2" variant="h5" gutterBottom>
                                    {title}
                                </Typography>
                                <Typography color="textSecondary" component="p" variant="body2">
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </div>
                </div>
            </Card>
        </NavLink>
    )
}

export default CoursesCard;
