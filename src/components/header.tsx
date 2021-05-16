import * as React from 'react';
import { VNode } from 'preact';
import { memo } from 'preact/compat';
import { IHeader } from '../models/shared.types';
import Icons from './icons/icons';
import { HeaderContainer, profileImage, Title } from '../styles/common.style';
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { HeaderTextWrapper } from './header.style';

interface IBannerProps {
  header: IHeader;
  profileImage: any | IGatsbyImageData | ProfileImage;
}

const Header = (props: IBannerProps): VNode => {
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
