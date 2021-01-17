import * as React from 'react';
import { memo, ReactElement } from 'react';
import { BlogCardLink, BlogCardTitle } from './PostTitle.style';

interface IPostTitle {
  text: string;
  link: string;
}

const PostTitle = ({ text, link }: IPostTitle): ReactElement => (
  <BlogCardLink to={link}>
    <BlogCardTitle>
      <h2>{text}</h2>
    </BlogCardTitle>
  </BlogCardLink>
);

export default memo(PostTitle);
