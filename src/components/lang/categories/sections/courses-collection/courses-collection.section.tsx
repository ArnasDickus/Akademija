import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CategoriesType } from 'core/types/categories.types';
import React from 'react';

import * as S from './courses-collection.styles';

const CourseCollections: React.FC<CategoriesType> = ({ title, courses, url }) => {
  // const currentRoute = useLocation().pathname;

  return (
    <S.CourseCollection>
      <p className="title">{/* <NavLink to={`${currentRoute}/${url}`}>{title}</NavLink> */}</p>
      <div className="row">
        {courses.map((course) => (
          <Card key={course.id} className="root">
            {title}
            {url}
            {/* <NavLink className={classes.cardLink} to={`${currentRoute}/${url}/${course.url}`}> */}
            <CardActionArea className="actionArea">
              <CardMedia className="media" title={course.title} />
              <CardContent className="content">
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
    </S.CourseCollection>
  );
};

export default CourseCollections;
