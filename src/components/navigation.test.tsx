import React from 'react';
import renderer from 'react-test-renderer';

import Navigation from './navigation';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
