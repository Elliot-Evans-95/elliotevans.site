import { IEdge, IHeader } from './shared.types';

export interface AboutPageProps {
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

export interface IPageAbout {
  paraOne: string;
  paraTwo: string;
  paraThree: string;
  paraFour: string;
}

interface IHeaderNode {
  node: {
    id: string;
    childSiteJson: {
      id: string;
      header: IHeader;
      about: IPageAbout;
    };
  };
}

export interface IAboutNode {
  excerpt: string;
  timeToRead: number;
  frontmatter: {
    date: string;
    title: string;
  };
  id: string;
}

export interface IAboutProps {
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
