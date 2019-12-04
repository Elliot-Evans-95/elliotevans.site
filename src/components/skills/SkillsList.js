import React, { PureComponent } from 'react';
import Skill from './Skill';
import PropTypes from 'prop-types';
import { SkillsGrid } from './Skills.style';
import { SkillStyle } from './Skill.style';

const mapStateToProps = state => ({ skills: state.Skills });

class Skills extends PureComponent {
  skillList() {
    return this.props.skills.map(skill => (
      <SkillStyle className="project-button" key={skill.id}>
        <Skill name={skill.name} image={skill.imageUrl} years={skill.years} />
      </SkillStyle>
    ));
  }

  render() {
    return <SkillsGrid>{this.skillList()}</SkillsGrid>;
  }
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default SkillList;
