import React from 'react';
import classes from './category-card.module.scss';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import coursesImg from '../../assets/course-placeholder.jpg';

interface Props {
    title: string;
}

const CategoryCard: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <Card>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <CardActionArea>
                            <h2>This is image place</h2>
                            <CardMedia

                                image={coursesImg}
                                title={title}
                            />
                        </CardActionArea>
                    </div>

                    <div className={classes.col}>
                        <CardActionArea>
                            <div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        { title }
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </div>
                        </CardActionArea>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CategoryCard;
