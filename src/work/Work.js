// @flow

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../shared/components/PageHeader';
import ProjectList from '../project/ProjectList';
import Project from '../project/Project';
import { WorkGrid } from './Work.style';
import Blobs from '../blobs/Blobs';

class Work extends PureComponent {
  heading = 'Projects';
  subHeading = 'Portfolio of personal projects';

  componentDidMount() {
    document.getElementById('root').style.backgroundImage = 'url(work.svg)';
  }

  render() {
    return (
      <WorkGrid>
        <Helmet>
          <title>Elliot Evans - Work</title>
          <meta name="description" content="Work Page" />
          <meta
            name="keywords"
            content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
          />
        </Helmet>
        <Blobs location={this.props.location} />
        <PageHeader heading={this.heading} subHeading={this.subHeading} />
        <ProjectList />
        <Project />
      </WorkGrid>
    );
  }
}

export default Work;
