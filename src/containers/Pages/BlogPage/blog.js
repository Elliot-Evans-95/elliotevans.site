// @flow

import React, { Component } from 'react';

import { Helmet } from 'react-helmet';

import { Main, EECite } from '../../../assets/styles/styles';

import marked from 'marked';
import * as yamlFront from 'yaml-front-matter';

// import Card from '../../../components/card';

function mapFiles(context) {
  const keys = context.keys();
  const values = keys.map(context);
  return keys.reduce(
    (accumulator, key, index) => ({
      ...accumulator,
      [key]: values[index]
    }),
    {}
  );
}

const test = mapFiles(require.context('../../../assets/posts', true, /\.md$/));
const list = [];

for (const key in test) {
  if (!test.hasOwnProperty(key)) continue;
  list.push(test[key]);
}

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: ['1', '2', '3'],
      markdown: [],
      header: []
    };
  }

  componentDidMount() {
    for (const file of list) {
      fetch(file)
        .then(response => {
          return response.text();
        })
        .then(text => {
          this.setState(prevState => ({
            header: [...prevState.header, Blog.objectToArray(text)],
            markdown: [
              ...prevState.markdown,
              Blog.transformMarkdownContent(text)
            ]
          }));
        });
    }
  }

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

  render() {
    console.log(this.state.header);

    const blogPosts = this.state.markdown.map(post => (
      <div dangerouslySetInnerHTML={{ __html: post }} />
    ));

    const headerOfBlogPosts = this.state.header.map(head => (
      <div>
        {head[0]} {head[1]} {head[2]}
      </div>
    ));

    return (
      <Main>
        <Helmet>
          <title>Elliot Evans - Blog</title>
          <meta name="description" content="Blog Page" />
          <meta
            name="keywords"
            content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
          />
        </Helmet>
        <h2>Blog</h2>
        {/*<Card text={testText}/>*/}
        <EECite>Time and stuff</EECite>
        {headerOfBlogPosts}
        {blogPosts}
      </Main>
    );
  }
}

export default Blog;
