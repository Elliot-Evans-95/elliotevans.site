import * as React from 'react';
import { BlogCardLink, BlogCardTitle } from './PostTitle.style';
import { memo } from 'react';

interface IPostTitle {
  text: string;
  link: string;
}

const PostTitle = ({ text, link }: IPostTitle) =>
  (
    <BlogCardLink to={link}>
      <BlogCardTitle>
        <h2>{text}</h2>
      </BlogCardTitle>
    </BlogCardLink>
  );

export default memo(PostTitle);
