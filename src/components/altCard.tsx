import * as React from 'react';
import { AltCardContainer } from '../styles/styles';
import { memo } from 'react';
import { IPageAbout } from '../models/about.types';

interface IAboutTextProps {
  about: IPageAbout;
}

const AltCard = (text: IAboutTextProps) => {
  return (
    <AltCardContainer>
      <p>{text.about.paraOne}</p>
      <p>{text.about.paraTwo}</p>
      <p>{text.about.paraThree}</p>
      <p>{text.about.paraFour}</p>
    </AltCardContainer>
  );
};

export default memo(AltCard);
