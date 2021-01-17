import * as React from 'react';
import { memo, ReactElement } from 'react';
import { CardContainer } from '../styles/styles';

interface IAboutTextProps {
  about: string;
}

const Card = (text: IAboutTextProps): ReactElement => {
  return (
    <CardContainer>
      <p>{text.about}</p>
    </CardContainer>
  );
};

export default memo(Card);
