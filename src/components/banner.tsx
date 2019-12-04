import * as React from 'react';
import { memo } from 'react';
import { Header, MyFace, SubHeading, Title } from '../styles/styles';
import { IHeader } from '../pages';

interface IBannerProps {
  header: IHeader
}

const Banner = (props: IBannerProps) => {
  return (
    <Header>
      <MyFace
        src={props.header.icon}
        alt="My face"
      />
      <Title>{props.header.heading}</Title>
      <SubHeading>{props.header.subHeading}</SubHeading>
    </Header>
  );
};

export default memo(Banner);
