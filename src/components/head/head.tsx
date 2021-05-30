import * as React from 'react';
import { FunctionComponent, VNode } from 'preact';
import { Helmet } from 'react-helmet-async';
import { HeadProps } from './head.type';
import { memo } from 'preact/compat';

const head: FunctionComponent<HeadProps> = ({
  title,
  description,
  keywords,
}): VNode => {
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
      {/* <!--Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-87577564-1"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XJ0WFL0QF9"
      />

      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XJ0WFL0QF9');
          gtag('config', 'UA-87577564-1');
        `}
      </script>

      {/*  <!-- Google Optimise --> */}
      <script
        async
        src="https://www.googleoptimize.com/optimize.js?id=OPT-WPWN5Q8"
      />
    </Helmet>
  );
};

export default memo(head);
