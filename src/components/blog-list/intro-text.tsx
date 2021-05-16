import * as React from 'react';
import { VNode } from 'preact';
import { IntroTextProps } from './blog-list.type';

export const IntroText = ({ blogPost }: IntroTextProps): VNode => {
  const text = blogPost.frontmatter.intro
    ? blogPost.frontmatter.intro
    : blogPost.excerpt;

  return <p>{text}</p>;
};
