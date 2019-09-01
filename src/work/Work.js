// @flow

import React, { PureComponent } from 'react';
import PageHeader from '../shared/components/PageHeader';
import ProjectList from '../project/ProjectList';
import Project from '../project/Project';
import { WorkGrid } from './Work.style';
import Blobs from '../blobs/Blobs';
import { Meta } from '../shared/meta/meta';

class Work extends PureComponent {
  heading = 'Projects';
  subHeading = 'Portfolio of personal projects';

  componentDidMount() {
    const title = 'Elliot Evans - Work';
    const desc = 'Work Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

    document.getElementById('root').style.backgroundImage = 'url(work.svg)';
  }

  render() {
    return (
      <WorkGrid>
        <Blobs location={this.props.location} />
        <PageHeader heading={this.heading} subHeading={this.subHeading} />
        <ProjectList />
        <Project />
      </WorkGrid>
    );
  }
}

export default Work;
