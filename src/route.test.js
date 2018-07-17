import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Home from './containers/Pages/HomePage/home';
import Root from './route';

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <Root />
    </MemoryRouter>
  );

describe('#routes', () => {
  test('renders home page on initial route', () => {
    const component = renderRoutes('/');

    expect(component.find(Home)).toHaveLength(1);
  });
});
