import * as React from 'react';
import { BlogCard, Cite } from '../styles/styles';
import { memo } from 'react';
import PostTitle from './post/PostTitle';
import { IEdge } from '../pages';

// @ts-ignore
const BlogList = ({ blog }) => {
  const generateCoffee = (timeToRead: number) =>
    Array.from(Array(timeToRead), (_, i) =>
      (
        <span>☕</span>
      ));

  const blogPosts = blog.props.map((post: IEdge) => (
    <BlogCard key={post.node.id}>
      <PostTitle text={post.node.frontmatter.title} />
      <div>{generateCoffee(post.node.timeToRead)}</div>
      <p>{post.node.excerpt}</p>
      <Cite>{post.node.frontmatter.date}</Cite>
    </BlogCard>
  ));

  return <div>{blogPosts}</div>;
};

export default memo(BlogList);
