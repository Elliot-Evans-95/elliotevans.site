import React, { PureComponent } from 'react';

import {
  MainProjectImageWrapper,
  SelectedProjectContainer,
} from './Project.style';
import BlurImages from '../BlurImages';
import { MainProjectImage } from '../../styles/styles';

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

export default SelectedProject;
