// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  message: PropTypes
};

const Button = (props: Props) => {
  return <button>{props.message}</button>;
};

Button.propTypes = {
  message: PropTypes.string
};

export default Button;
