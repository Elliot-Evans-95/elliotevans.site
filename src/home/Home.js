import React, { PureComponent } from 'react';
import { Main } from '../shared/styles/styles';
import { connect } from 'react-redux';

import Banner from '../shared/components/Banner';

import './Home.css';

import BlogList from '../shared/components/BlogList';
import { fetchPosts } from '../shared/actions/markdown';
import Blobs from '../blobs/Blobs';
import { Meta } from '../shared/meta/meta';

const mapStateToProps = state => ({
  posts: state.Posts
});

class Index extends PureComponent {
  componentDidMount() {
    const title = 'Elliot Evans - Home';
    const desc = 'Home Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

    this.props.dispatch(fetchPosts());
  }

  render() {
    if (this.props.posts.length === 0) {
      return (
        <Main>
          <Blobs location={this.props.location} />
          <Banner text={this.props.posts[0].test} />
          <BlogList blog={this.props.posts[0].markdown} />
        </Main>
      );
    } else {
      return (
        <Main>
          <Blobs location={this.props.location} />
          <Banner text={this.props.posts[0].test} />
          <BlogList blog={this.props.posts[0].markdown} />
        </Main>
      );
    }
  }
}

const Home = connect(mapStateToProps)(Index);

export default Home;
