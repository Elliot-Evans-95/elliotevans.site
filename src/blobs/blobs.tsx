import * as React from 'react';
import { memo } from 'react';

import './blobs.css';

const Blobs = (blobs: any) => {
  if (blobs.props.location.pathname === '/') {
    return (
      <div className={'blobs'}>
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
  } else if (blobs.props.location.pathname.includes('post')) {
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
      <div className={'blobs'}>
        <div id="blob-1" />
        <div id="blob-2" />
        <div id="blob-3" />
        <div id="blob-4" />
        <div id="blob-6" />
        <div id="blob-7" />
      </div>
    );
  }
};

export default memo(Blobs);
