import { IHeader } from './shared.types';

export interface IndexPageProps {
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

export interface IHeaderNode {
  node: {
    id: string;
    childSiteJson: {
      id: string;
      header: IHeader;
    };
  };
}

export interface INode {
  excerpt: string;
  timeToRead: number;
  frontmatter: {
    date: string;
    title: string;
  };
  fields: {
    slug: string;
  };
  id: string;
}

export interface IEdge {
  node: INode;
}

export interface IHomePageProps {
  props: Array<IEdge>;
}

export interface IIndexProps {
  children: undefined;
  data: {
    allMarkdownRemark: {
      edges: Array<IEdge>;
    };
    allFile: IHeaderQuery;
  }
  location: Location;
  // navigate: ƒ navigate(to, options)
  pageContext: {
    isCreatedByStatefulCreatePages: true
  }
  // pageResources: {json: {…}, page: {…}, component: ƒ}
  path: string
  pathContext: {
    isCreatedByStatefulCreatePages: true
  }
  uri: string
}
