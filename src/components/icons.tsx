import * as React from 'react';
import { memo, ReactElement } from 'react';
import styled from '@emotion/styled';

import Rss from '../assets/icons/rss-feed.svg';
import Github from '../assets/icons/github-icon.svg';

const IconWrapper = styled.div`
  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: var(--icon-color);
    margin-right: 0.6rem;

    :first-of-type {
      margin-left: 0;
    }
  }
`;

type IconsProps = {
  page: 'home' | 'blog';
};

const goToGithub = () =>
  window.location.assign('https://github.com/Elliot-Evans-95');

const goToRSSFeed = () =>
  window.location.assign('https://elliotevans.site/rss.xml');

const Icons = ({ page }: IconsProps): ReactElement => {
  return (
    <IconWrapper>
      {page === 'home' && <Github onClick={goToGithub}>GITHUB</Github>}
      <Rss onClick={goToRSSFeed}>RSS FEED</Rss>
    </IconWrapper>
  );
};

export default memo(Icons);
