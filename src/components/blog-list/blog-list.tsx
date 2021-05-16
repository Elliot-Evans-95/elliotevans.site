import * as React from 'react';
import { VNode } from 'preact';
import { memo } from 'preact/compat';
import { IEdge } from '../../models/shared.types';
import { renderBooksFromTimeRead } from '../../utils/renderBooksFromTimeRead';
import { IHomePageProps } from './blog-list.type';
import {
  BlogCard,
  BlogCardInfo,
  BlogCardInfoCite,
} from '../../styles/common.style';
import PostTitle from '../post-title/post-title';
import { IntroText } from './intro-text';

const BlogList = (blog: IHomePageProps): VNode => {
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
