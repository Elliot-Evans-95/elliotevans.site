import * as React from 'react';
import { ReactElement } from 'react';
import { IntroTextProps } from './blog-list.type';

export const IntroText = ({ blogPost }: IntroTextProps): ReactElement => {
  const text = blogPost.frontmatter.intro
    ? blogPost.frontmatter.intro
    : blogPost.excerpt;

  return <p>{text}</p>;
};
