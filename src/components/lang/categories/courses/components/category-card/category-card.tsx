import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import coursesImg from 'assets/course-placeholder.jpg';
import { CoursesType } from 'core/types/categories.types';
import React from 'react';

import * as S from './category-card.styles';

const CoursesCard: React.FC<CoursesType> = ({ title, img, description, url }) => {
  return (
    // <NavLink to={`${currentRoute}/${url}`}>
    <S.Container>
      <Card className="card">
        <div className="row">
          <div className="col">
            <CardActionArea>
              <CardMedia className="image" image="" title={title} />
            </CardActionArea>
            {url}
            {/* TODO Add image link to card media. */}
            <p className="hide">{img}</p>
          </div>

          <div className="colText">
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
    </S.Container>
    // </NavLink>
  );
};

export default CoursesCard;
