import * as React from 'react';
import { BlogCard, Cite } from '../styles/styles';
import { memo } from 'react';
import PostTitle from './post/PostTitle';
import { IEdge } from '../models/shared.types';

interface IHomePageProps {
  blog: Array<IEdge>;
}

const BlogList = (blog: IHomePageProps) => {
  const generateCoffee = (timeToRead: number) =>
    Array.from(Array(timeToRead), (_, index) => <span key={index}>☕</span>);

  const blogPosts = blog.blog.map((post: IEdge) => (
    <BlogCard key={post.node.id}>
      <PostTitle
        text={post.node.frontmatter.title}
        link={post.node.fields.slug}
      />
      <div>{generateCoffee(post.node.timeToRead)}</div>
      <p>{post.node.excerpt}</p>
      <Cite>{post.node.frontmatter.date}</Cite>
    </BlogCard>
  ));

  return <div>{blogPosts}</div>;
};

export default memo(BlogList);
