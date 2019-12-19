import { IEdge, IHeader } from './shared.types';
import InputGroup from '../components/contact/inputGroup';
import * as React from 'react';

export interface ContactPageProps {
  location: Location;
  data: {
    allMarkdownRemark: {
      edges: Array<IEdge>;
    };
    allFile: IHeaderQuery;
  };
}

export interface IHeaderQuery {
  edges: Array<IHeaderNode>;
}

interface IHeaderNode {
  node: {
    id: string;
    childSiteJson: {
      id: string;
      header: IHeader;
    };
  };
}

export interface IContactNode {
  excerpt: string;
  timeToRead: number;
  frontmatter: {
    date: string;
    title: string;
  };
  id: string;
}

export interface IProjectNode {
  excerpt: string;
  timeToRead: number;
  frontmatter: {
    date: string;
    featuredImage: string;
    title: string;
  };
  id: string;
}

export interface IContactProps {
  children: undefined;
  data: {
    allMarkdownRemark: {
      edges: Array<IEdge>;
    };
    allFile: IHeaderQuery;
  };
  location: Location;
  // navigate: ƒ navigate(to, options)
  pageContext: {
    isCreatedByStatefulCreatePages: true;
  };
  // pageResources: {json: {…}, page: {…}, component: ƒ}
  path: string;
  pathContext: {
    isCreatedByStatefulCreatePages: true;
  };
  uri: string;
}

export interface IInput {
  label: string;
  placeholder: string;
  type: string;
}
