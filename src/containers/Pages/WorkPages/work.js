// @flow

import React from 'react';
import { Helmet } from 'react-helmet';

import Project from '../../../components/project';
import ProjectList from '../../../components/project-list';

import { WorkGrid } from '../../../assets/styles/styles';

const Work = () => (
  <WorkGrid>
    <Helmet>
      <title>Elliot Evans - Work</title>
      <meta name="description" content="Work Page" />
      <meta
        name="keywords"
        content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
      />
    </Helmet>
    <ProjectList />
    <Project />
  </WorkGrid>
);

export default Work;
