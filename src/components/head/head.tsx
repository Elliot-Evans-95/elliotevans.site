import * as React from 'react';
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { HeadProps } from './head.type';
import { memo } from 'preact/compat';

const head = ({ title, description, keywords }: HeadProps): ReactElement => (
  <Helmet>
    {/* <!-- Primary Meta Tags --> */}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://myawesomewebsite.com/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/facebookimage.png" />
    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="http://myawesomewebsite.com/" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content="/twitterimage.png" />
  </Helmet>
);

export default memo(head);
