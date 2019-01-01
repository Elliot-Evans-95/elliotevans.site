// @flow

import React from 'react';
import { BlogCardLink, BlogCardTitle } from './PostTitle.style';

const PostTitle = ({ text }) => (
  <div>
    <BlogCardTitle>
      <h5>{text[0].title}</h5>
    </BlogCardTitle>
    <BlogCardLink to={text[0].url}>Full Post</BlogCardLink>
  </div>
);

export default PostTitle;
