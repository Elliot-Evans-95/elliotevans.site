import * as React from 'react';
import { memo, ReactElement } from 'react';
import { IHeader } from '../models/shared.types';
import Icons from './icons/icons';
import { FixedImage } from '../models/home.types';
import styled from '@emotion/styled';
import { HeaderContainer, MyFace, Title } from '../styles/common.style';

const HeaderTextWrapper = styled.div`
  @media (min-width: 45em) {
    margin-left: 1rem;
  }
`;

interface IBannerProps {
  header: IHeader;
  imageSrc: FixedImage;
}

const Header = (props: IBannerProps): ReactElement => {
  return (
    <HeaderContainer>
      <MyFace
        alt="My face"
        fixed={{
          // based off 7rem
          width: 80,
          height: 80,
          src: props.imageSrc.srcWebp,
          srcSet: props.imageSrc.srcSetWebp,
          srcWebp: props.imageSrc.srcSetWebp,
          srcSetWebp: props.imageSrc.srcSetWebp,
        }}
      />
      <HeaderTextWrapper>
        <Title>{props.header.heading}</Title>
        <Icons page="home" />
      </HeaderTextWrapper>
    </HeaderContainer>
  );
};

export default memo(Header);
