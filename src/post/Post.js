// @flow

import React, { Component } from 'react';

import { Helmet } from 'react-helmet-async';

import marked from 'marked';
import * as yamlFront from 'yaml-front-matter';
import { Main } from '../shared/styles/styles';
import PostTitle from './PostTitle';

class Post extends Component {
  state = {
    header: null,
    markdown: null
  };

  static transformMarkdownContent(text) {
    const content = yamlFront.loadFront(text);

    return marked(content.__content);
  }

  static objectToArray(text) {
    const object = yamlFront.loadFront(text);

    return [
      object.date.toString(),
      object.path.toString(),
      object.title.toString()
    ];
  }

  componentDidMount() {
    document.getElementById('root').style.backgroundImage = 'url(../post.svg)';

    const markdownFile = require(`./../assets/posts/${
      this.props.match.params.id
    }.md`);
    this._loadMarkdownData(markdownFile);
  }

  render() {
    if (this.state.header === null && this.state.markdown === null) {
      return (
        <Main>
          <Helmet>
            <title>Elliot Evans - Post</title>
            <meta name="description" content="Post Page" />
            <meta
              name="keywords"
              content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
            />
          </Helmet>
          <h2>Post</h2>
        </Main>
      );
    } else {
      return (
        <Main>
          <Helmet>
            <title>Elliot Evans - Post</title>
            <meta name="description" content="Post Page" />
            <meta
              name="keywords"
              content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
            />
          </Helmet>
          <h2>Post</h2>
          <PostTitle text={this.state.header} />
          <div dangerouslySetInnerHTML={{ __html: this.state.markdown }} />
        </Main>
      );
    }
  }

  _loadMarkdownData(markdownFile) {
    fetch(markdownFile)
      .then(response => response.text())
      .then(text => {
        this.setState({
          header: [Post.objectToArray(text)].map(head => ({
            date: head[0],
            url: head[1],
            title: head[2]
          })),
          markdown: [Post.transformMarkdownContent(text)]
        });
      });
  }
}

export default Post;
