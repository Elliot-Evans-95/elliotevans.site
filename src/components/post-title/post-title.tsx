import * as React from 'react';
import { FunctionComponent, VNode } from 'preact';
import { memo } from 'preact/compat';
import { BlogCardLink, BlogCardTitle } from './post-title.style';
import { IPostTitle } from './post-title.type';
import { Link } from 'gatsby';

const PostTitle: FunctionComponent<IPostTitle> = ({ text, link }): VNode => (
  <Link classNames={BlogCardLink} to={link}>
    <BlogCardTitle>
      <h2>{text}</h2>
    </BlogCardTitle>
  </Link>
);

export default memo(PostTitle);
