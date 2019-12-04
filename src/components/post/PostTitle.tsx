import * as React from 'react';
import { BlogCardLink, BlogCardTitle } from './PostTitle.style';
import { memo } from 'react';

// @ts-ignore
const PostTitle = ({ text }) => (
  <BlogCardLink to={'TODO'}>
    <BlogCardTitle>
      <h2>{text}</h2>
    </BlogCardTitle>
  </BlogCardLink>
);

export default memo(PostTitle);
