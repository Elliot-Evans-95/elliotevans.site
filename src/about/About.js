// @flow

import React, { PureComponent } from 'react';
import { Main } from '../shared/styles/styles';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../shared/components/Banner';
import AltCard from '../shared/components/AltCard';
import connect from 'react-redux/es/connect/connect';
import { AboutBanner } from './About.style';
import Blobs from '../blobs/Blobs';
import { Meta } from '../meta/meta';

const mapStateToProps = state => ({
  about: state.About
});

class AboutMe extends PureComponent {
  componentDidMount() {
    const title = 'Elliot Evans - About';
    const desc = 'About Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

    document.getElementById('root').style.backgroundImage = 'url(about.svg)';
  }

  render() {
    return (
      <Main>
        {/*<HelmetProvider>*/}
        {/*<Helmet>*/}
        {/*  <title>Elliot Evans - About</title>*/}
        {/*  <meta name="description" content="About Page" />*/}
        {/*  <meta*/}
        {/*    name="keywords"*/}
        {/*    content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"*/}
        {/*  />*/}
        {/*</Helmet>*/}
        <Blobs location={this.props.location} />
        <AboutBanner>
          <Banner text={this.props.about.banner} />
        </AboutBanner>
        <AltCard text={this.props.about.card} image={this.props.about.image} />
        {/*</HelmetProvider>*/}
      </Main>
    );
  }
}

const About = connect(mapStateToProps)(AboutMe);

export default About;
