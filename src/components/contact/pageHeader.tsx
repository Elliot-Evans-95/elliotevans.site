import * as React from 'react';
import { HeaderWrapper } from '../../styles/styles';
import { memo } from 'react';

interface IPageHeaderProps {
  heading: string;
  subHeading: string;
}

const PageHeader = ({ heading, subHeading }: IPageHeaderProps) =>
  (
    <HeaderWrapper>
      <h1>{heading}</h1>
      <h3>{subHeading}</h3>
    </HeaderWrapper>
  );

export default memo(PageHeader);
