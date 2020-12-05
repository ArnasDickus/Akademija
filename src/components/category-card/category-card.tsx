import React from 'react';
import classes from './category-card.module.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import coursesImg from '../../assets/course-placeholder.jpg';
import { CoursesInterface } from "../../core/interfaces/categories.interface";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryCard: React.FC<CoursesInterface> = ({ title, description, img, url }) => {
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
                                    <Typography gutterBottom variant="h5" component="h2">
                                        { title }
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
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

export default CategoryCard;
