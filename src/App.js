/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import ListPost from './components/ListPost';
import Post from './components/Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const postPromise = axios.get(
      'https://thewirecutter.com/wp-json/wp/v2/posts'
    );

    postPromise
      .then(response => {
        const postList = response.data;

        const linkPromises = postList.map(p => {
          const url = p._links['wp:featuredmedia'][0].href;
          return axios.get(url.slice(url.indexOf('.com') + 4));
        });
        return Promise.all([postPromise, Promise.all(linkPromises)]);
      })
      .then(([articles, links]) => {
        const postList = articles.data;

        postList.forEach((post, index) => {
          const p = post;
          p.img = links[index].data.link;
        });

        this.setState({ posts: postList });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <ListPost {...props} posts={posts} />}
        />
        <Route
          path="/posts"
          render={props => <ListPost {...props} posts={posts} />}
        />
        <Route
          path="/post/:id"
          render={props => <Post {...props} posts={posts} />}
        />
      </div>
    );
  }
}

export default App;
