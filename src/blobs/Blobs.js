import './blobs.css';

class Blobs {
  loadMoreBlobs() {
    const isHomePage = this.props.location.pathname === '/';

    if (isHomePage) {
    }
  }

  render() {
    if (this.props.location.pathname === '/') {
      return (
        <div>
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
    } else if (this.props.location.pathname.includes('post')) {
      return (
        <div>
          <div id="blob-2" />
          <div id="blob-3" />
          <div id="post-blob-5" />
          <div id="blob-8" />
        </div>
      );
    } else {
      return (
        <div>
          <div id="blob-1" />
          <div id="blob-2" />
          <div id="blob-3" />
          <div id="blob-4" />
          <div id="blob-6" />
          <div id="blob-7" />
        </div>
      );
    }
  }
}
