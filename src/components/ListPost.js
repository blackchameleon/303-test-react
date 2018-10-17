/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types  */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, ListSubheader } from '@material-ui/core';

import ListPostItem from './ListPostItem';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    height: '100%'
  }
});

const ListPost = props => {
  const { classes, posts } = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList}>
        <GridListTile key="title" cols={2} style={{ height: 'auto' }}>
          <ListSubheader variant="h5">Posts</ListSubheader>
        </GridListTile>
        {posts.map(p => (
          <ListPostItem {...p} key={p.id} />
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(ListPost);
