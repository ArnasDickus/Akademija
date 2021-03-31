import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import coursesImg from 'assets/course-placeholder.jpg';
import { CategoriesType } from 'core/types/categories.types';
import React from 'react';

import classes from './courses-collection.module.scss';

const CourseCollections: React.FC<CategoriesType> = ({ title, courses, url }) => {
  // const currentRoute = useLocation().pathname;

  return (
    <div className={classes.courseCollections}>
      <p className={classes.title}>
        {/* <NavLink to={`${currentRoute}/${url}`}>{title}</NavLink> */}
      </p>
      <div className={classes.row}>
        {courses.map((course) => (
          <Card key={course.id} className={classes.root}>
            {title}
            {url}
            {/* <NavLink className={classes.cardLink} to={`${currentRoute}/${url}/${course.url}`}> */}
            <CardActionArea className={classes.actionArea}>
              <CardMedia className={classes.media} image={coursesImg} title={course.title} />
              <CardContent className={classes.content}>
                <Typography component="h2" variant="h5" gutterBottom>
                  {course.title}
                </Typography>
                <Typography color="textSecondary" component="p" variant="body2">
                  {course.about}
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* </NavLink> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCollections;
