import * as React from 'react';
import { FunctionComponent, VNode } from 'preact';
import { memo } from 'preact/compat';
import { IHeader } from '../models/shared.types';
import Icons from './icons/icons';
import { HeaderContainer, profileImage, Title } from '../styles/common.style';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { HeaderTextWrapper } from './header.style';

interface IBannerProps {
  header: IHeader;
  profileImage: IGatsbyImageData;
}

const Header: FunctionComponent<IBannerProps> = (props): VNode => {
  const image = getImage(props.profileImage);

  return (
    <HeaderContainer>
      <GatsbyImage className={profileImage} alt="My face" image={image} />
      <HeaderTextWrapper>
        <Title>{props.header.heading}</Title>
        <Icons page="home" />
      </HeaderTextWrapper>
    </HeaderContainer>
  );
};

export default memo(Header);
