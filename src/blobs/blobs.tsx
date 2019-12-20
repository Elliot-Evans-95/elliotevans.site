import * as React from 'react';
import { memo } from 'react';

import './blobs.css';

export enum PageType {
  POST = 'Post',
  ABOUT = 'About',
  CONTACT = 'Contact',
  DEFAULT = 'Default',
}

export interface IBlobProps {
  pageType: PageType;
}

const Blobs = (pageType: IBlobProps) => {
  if (
    pageType.pageType === PageType.POST ||
    pageType.pageType === PageType.ABOUT ||
    pageType.pageType === PageType.CONTACT
  ) {
    return (
      <div className={'blobs'}>
        <div id="blob-2" />
        <div id="blob-3" />
        <div id="post-blob-5" />
        <div id="blob-8" />
      </div>
    );
  } else {
    return (
      <div className={'blobs blobs-lg'}>
        <div id="blob-1" />
        <div id="blob-2" />
        <div id="blob-3" />
        <div id="blob-4" />
        <div id="blob-6" />
        <div id="blob-7" />
        <div id="blob-5" />
        <div id="blob-8" />
        <div id="blob-9" />
        <div id="blob-10" />
        <div id="blob-11" />
        <div id="blob-12" />
      </div>
    );
  }
};

export default memo(Blobs);
