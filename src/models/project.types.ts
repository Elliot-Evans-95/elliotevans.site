import { IHeader } from './shared.types';

export interface ProjectPageProps {
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

export interface IEdge {
  node: INode;
}

export interface INode {
  excerpt: string;
  timeToRead: number;
  frontmatter: {
    date: string;
    title: string;
    featuredImage: string;
  };
  id: string;
}

export interface IProjectProps {
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
