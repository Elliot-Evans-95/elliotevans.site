import React, { PureComponent } from 'react';
import { Main } from '../shared/styles/styles';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import Banner from '../shared/components/Banner';

import './Home.css';

import BlogList from '../shared/components/BlogList';
import { fetchPosts } from '../shared/actions/markdown';

const mapStateToProps = state => ({
  posts: state.Posts
});

class Index extends PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    document.getElementById('root').style.backgroundImage = 'url(home.svg)';
  }

  render() {
    if (this.props.posts.length === 0) {
      return (
        <Main>
          <Helmet>
            <title>Elliot Evans - Home</title>
            <meta name="description" content="Home Page" />
            <meta
              name="keywords"
              content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
            />
          </Helmet>
          <Banner text={this.props.posts[0].test} />
          <BlogList blog={this.props.posts[0].markdown} />
        </Main>
      );
    } else {
      return (
        <Main>
          <Helmet>
            <title>Elliot Evans - Home</title>
            <meta name="description" content="Home Page" />
            <meta
              name="keywords"
              content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
            />
          </Helmet>
          <Banner text={this.props.posts[0].test} />
          <BlogList blog={this.props.posts[0].markdown} />
        </Main>
      );
    }
  }
}

const Home = connect(mapStateToProps)(Index);

export default Home;
