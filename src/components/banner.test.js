import React from 'react';
import { mount, shallow } from 'enzyme';

import Banner from './banner';
import {
  HeaderGroup,
  MyFace,
  SubHeading,
  Title
} from '../assets/styles/styles';

describe('<Banner />', () => {
  const text = [
    'Hello, this is Elliot Evans.',
    'Front-end Developer here...',
    'Example',
    'There would be a short description from one of my blog posts but instead here is some placeholder text'
  ];

  test('render a label', () => {
    const wrapper = shallow(<Banner>Hello Jest!</Banner>);

    expect(wrapper).toMatchSnapshot();
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Banner text={text} />);
    const fistLineInText = wrapper.prop('text')[0];

    expect(fistLineInText).toEqual('Hello, this is Elliot Evans.');
  });

  it('renders <MyFace /> component', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find(MyFace)).toHaveLength(1);
  });

  it('renders <HeaderGroup /> component', () => {
    const wrapper = mount(<HeaderGroup />);
    expect(wrapper.find(HeaderGroup)).toHaveLength(1);
  });

  it('renders <Title /> component', () => {
    const wrapper = mount(<Title />);
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it('renders <SubHeading /> component', () => {
    const wrapper = mount(<SubHeading />);
    expect(wrapper.find(SubHeading)).toHaveLength(1);
  });
});
