import * as React from 'react';
import { FunctionComponent, VNode } from 'preact';
import { Helmet } from 'react-helmet-async';
import { HeadProps } from './head.type';
import { memo } from 'preact/compat';
import { useEffect } from 'react';

type windowWithDataLayer = Window & { dataLayer: Array<unknown> };

const head: FunctionComponent<HeadProps> = ({
  title,
  description,
  keywords,
}): VNode => {
  useEffect(() => {
    (window as windowWithDataLayer).dataLayer =
      (window as windowWithDataLayer).dataLayer || [];
    function gtag(...args) {
      (window as windowWithDataLayer).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-XJ0WFL0QF9');
  }, []);

  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="color-scheme" content="dark light" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://elliotevans.info/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/facebookimage.png" />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://elliotevans.info/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/twitterimage.png" />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script src="https://www.googletagmanager.com/gtag/js?id=G-XJ0WFL0QF9" />
      {/*  <!-- Google Optimise --> */}
      <script src="https://www.googleoptimize.com/optimize.js?id=OPT-WPWN5Q8" />
    </Helmet>
  );
};

export default memo(head);
