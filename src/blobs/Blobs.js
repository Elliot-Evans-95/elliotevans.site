import React, { PureComponent } from 'react';

import './blobs.css';

class Blobs extends PureComponent {
  loadMoreBlobs() {
    const isHomePage = this.props.location.pathname === '/';

    if (isHomePage) {
      return (
        <div>
          <div id="blob-5" />
          <div id="blob-8" />
          <div id="blob-9" />
          <div id="blob-10" />
          <div id="blob-11" />
          <div id="blob-12" />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="blob-1" />
        <div id="blob-2" />
        <div id="blob-3" />
        <div id="blob-4" />
        <div id="blob-6" />
        <div id="blob-7" />
        {this.loadMoreBlobs()}
      </div>
    );
  }
}

export default Blobs;
