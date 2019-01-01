// @flow

import React from 'react';
import { BlogCard, Cite } from '../styles/styles';
import PostTitle from '../../post/PostTitle';

const BlogList = ({ blog }) => {
  const blogPosts = blog.map(post => (
    <BlogCard key={post.id}>
      <PostTitle text={post.header} />
      <p>{post.header[0].introduction}</p>
      <Cite>{post.header[0].date}</Cite>
    </BlogCard>
  ));

  return <div>{blogPosts}</div>;
};

export default BlogList;
