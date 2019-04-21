// @flow

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { SkillGrid } from './Skills.style';
import SkillList from './SkillsList';
import Blobs from '../blobs/Blobs';

class Skills extends PureComponent {
  heading = 'Skills';
  subHeading = 'Experience on Languages, Frameworks and Tools';

  componentDidMount() {
    document.getElementById('root').style.backgroundImage = 'url(skills.svg)';
  }

  render() {
    return (
      <SkillGrid>
        <Helmet>
          <title>Elliot Evans - Skills</title>
          <meta name="description" content="Skills Page" />
          <meta
            name="keywords"
            content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
          />
        </Helmet>
        <Blobs location={this.props.location} />
        <h1>{this.heading}</h1>
        <h3>{this.subHeading}</h3>
        <SkillList />
      </SkillGrid>
    );
  }
}

export default Skills;
