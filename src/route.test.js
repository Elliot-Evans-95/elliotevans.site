import React from 'react';
import { mount } from 'enzyme';

import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

import Home from './containers/Pages/HomePage/home';
import About from './containers/Pages/AboutPage/about';
import Work from './containers/Pages/WorkPages/work';
import Contact from './containers/Pages/ContactPage/contact';
import store from './store';
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
  //
  // test("renders about page for about", () => {
  //   const component = renderRoutes("/about");
  //
  //   expect(component.find(About)).toHaveLength(1);
  // });
  //
  // test("renders work page for /work url", () => {
  //   const component = renderRoutes("/courses");
  //
  //   expect(component.find(Work)).toHaveLength(1);
  // });
  //
  // test("renders contact manage page for /course", () => {
  //   const component = renderRoutes("/contact");
  //
  //   expect(component.find(Contact)).toHaveLength(1);
  // });
});
