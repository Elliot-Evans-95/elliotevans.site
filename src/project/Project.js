// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSelectedProject } from '../shared/selectors';
import {
  MainProjectImageWrapper,
  SelectedProjectContainer
} from './Project.style';
import BlurImages from '../shared/components/BlurImages';
import { MainProjectImage } from '../shared/styles/styles';

const mapStateToProps = state => ({
  project: getSelectedProject(state)
});

class SelectedProject extends PureComponent {
  render() {
    return (
      <SelectedProjectContainer>
        <MainProjectImageWrapper>
          <MainProjectImage src={this.props.project[0].main_image} alt="" />
        </MainProjectImageWrapper>

        <BlurImages
          title={this.props.project[0].title}
          description={this.props.project[0].long_description}
        />
      </SelectedProjectContainer>
    );
  }
}

const Project = connect(mapStateToProps)(SelectedProject);

export default Project;
