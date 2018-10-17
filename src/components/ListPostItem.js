/* eslint-disable react/prop-types  */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 350
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover'
  }
};

function ListPostItem(props) {
  const { classes, img, excerpt, id, title } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title.rendered}
          className={classes.media}
          height="200"
          image={img}
          title={title.rendered}
        />

        <CardContent>
          <Typography gutterBottom component="h5">
            {title.rendered}
          </Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <Link to={`post/${id}`}>
            <Button size="small" color="primary">
              READ MORE
            </Button>
          </Link>
        </div>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(ListPostItem);
