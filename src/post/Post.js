// @flow

import React, { Component } from 'react';

import marked from 'marked';
import * as yamlFront from 'yaml-front-matter';
import { PostMain } from '../shared/styles/styles';
import Blobs from '../blobs/Blobs';
import { Meta } from '../shared/meta/meta';

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
    const title = 'Elliot Evans - Post';
    const desc = 'Post Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

    document.getElementById('root').style.backgroundImage = 'url(../post.svg)';

    const markdownFile = require(`./../assets/posts/${
      this.props.match.params.id
    }.md`);
    this._loadMarkdownData(markdownFile);
  }

  render() {
    if (this.state.header === null && this.state.markdown === null) {
      return (
        <PostMain>
          <Blobs location={this.props.location} />
          <h2>Post</h2>
        </PostMain>
      );
    } else {
      return (
        <PostMain>
          <Blobs location={this.props.location} />
          <h2>Post</h2>
          <div dangerouslySetInnerHTML={{ __html: this.state.markdown }} />
        </PostMain>
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
