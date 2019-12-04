import * as React from 'react';
import { BlogCard, Cite } from '../styles/styles';
import { memo } from 'react';
// import PostTitle from './post/PostTitle';

interface IBlog {
  id: string | number; 
  header: Array<IBlogHeader>
}

interface IBlogHeader {
  introduction: string;
  date: Date;
}

// @ts-ignore
const BlogList = ({ blog }) => {
  const blogPosts = blog.map((post: IBlog) => (
    <BlogCard key={post.id}>
      {/*<PostTitle text={post.header} />*/}
      <p>{post.header[0].introduction}</p>
      <Cite>{post.header[0].date}</Cite>
    </BlogCard>
  ));

  return <div>{blogPosts}</div>;
};

export default memo(BlogList);
