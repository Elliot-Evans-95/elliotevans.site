import React, { PureComponent } from 'react';
import { Main } from '../../styles/styles';
import Banner from '../Banner';
import AltCard from '../AltCard';
import { AboutBanner } from './About.style';
import Blobs from '../../blobs/Blobs';
import { Meta } from '../../shared/meta/meta';

const mapStateToProps = state => ({
  about: state.About,
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
        <Blobs location={this.props.location} />
        <AboutBanner>
          <Banner text={this.props.about.banner} />
        </AboutBanner>
        <AltCard text={this.props.about.card} image={this.props.about.image} />
      </Main>
    );
  }
}

export default AboutMe;
