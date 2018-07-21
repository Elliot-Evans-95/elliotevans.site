// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

type Props = {
  addArticle: PropTypes
};

class ConnectedForm extends Component<Props> {
  handleChange: () => void;
  handleSubmit: () => void;

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    const title = this.state;
    const id = 2;

    this.props.addArticle({ title, id });
    this.setState(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const higherTest = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default higherTest;
