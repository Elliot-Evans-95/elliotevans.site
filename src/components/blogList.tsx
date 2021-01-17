import * as React from 'react';
import { memo, ReactElement } from 'react';
import { BlogCard, BlogCardInfo, BlogCardInfoCite } from '../styles/styles';
import PostTitle from './post/PostTitle';
import { IEdge } from '../models/shared.types';
import { IHomeNode } from '../models/home.types';
import { renderBooksFromTimeRead } from '../utils/renderBooksFromTimeRead';

type IntroTextProps = {
  blogPost: IHomeNode;
};

const IntroText = ({ blogPost }: IntroTextProps): ReactElement => {
  const text = blogPost.frontmatter.intro
    ? blogPost.frontmatter.intro
    : blogPost.excerpt;

  return <p>{text}</p>;
};

interface IHomePageProps {
  blog: Array<IEdge>;
}

const BlogList = (blog: IHomePageProps): ReactElement => {
  const blogPosts = blog.blog.map((post: IEdge) => (
    <BlogCard key={post.node.id}>
      <PostTitle
        text={post.node.frontmatter.title}
        link={post.node.fields.slug}
      />
      <BlogCardInfo>
        <BlogCardInfoCite>{post.node.frontmatter.date}</BlogCardInfoCite>
        <div>{renderBooksFromTimeRead(post.node.timeToRead)}</div>
      </BlogCardInfo>

      <IntroText blogPost={post.node} />
    </BlogCard>
  ));

  return <div>{blogPosts}</div>;
};

export default memo(BlogList);
