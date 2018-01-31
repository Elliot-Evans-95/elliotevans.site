import { connect } from 'react-redux';
import { toggleProject } from './../Actions/actions';
import Work from './../pages/work/work';

const getProjects = projects => {
  return projects;
};

const mapStateToProps = state => ({
  projects: getProjects(state.projects)
});

const mapDispatchToProps = dispatch => {
  return {
    onProjectClick: dispatch(toggleProject())
  };
};

const ProjectList = connect(mapStateToProps, mapDispatchToProps)(Work);

export default connect(mapStateToProps)(ProjectList);
