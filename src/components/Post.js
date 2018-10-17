/* eslint-disable eqeqeq  */
/* eslint-disable react/prop-types  */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 800
  }
});

class Post extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      id
    };
  }

  render() {
    const { classes, posts } = this.props;
    const { id } = this.state;
    const post = posts.find(i => i.id == id);

    return (
      <div
        style={{
          display: 'flex',

          justifyContent: 'center',

          marginTop: '2rem',

          marginBottom: '2rem'
        }}
      >
        <Paper
          className={classes.root}
          elevation={1}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography component="h5" variant="headline">
            {post.title.rendered}
          </Typography>
          <Divider />
          <br />
          <img src={post.img} alt={post.title.rendered} />
          <Typography
            component="p"
            style={{ textAlign: 'justify' }}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          <Link to="/">
            <Button size="small" color="primary">
              BACK
            </Button>
          </Link>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
