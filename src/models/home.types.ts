import { IEdge, IHeader } from './shared.types';

export interface IHeaderQuery {
  edges: Array<HeaderNode>;
}

export interface HeaderNode {
  node: {
    header: IHeader;
  };
}

export interface AboutNode {
  node: {
    about: string;
  };
}

export interface IHomeNode {
  excerpt: string;
  timeToRead: number;
  frontmatter: {
    date: string;
    title: string;
    intro: string;
  };
  fields: {
    slug: string;
  };
  id: string;
}

export interface IHomePageProps {
  props: Array<IEdge>;
}

export interface FixedImage {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
}

interface ProfileImage {
  childImageSharp: {
    fixed: FixedImage;
  };
}

export interface HomeProps {
  children: undefined;
  data: {
    allMarkdownRemark: {
      edges: Array<IEdge>;
    };
    allFile: IHeaderQuery;
    profileImage: ProfileImage;
    header: {
      edges: Array<HeaderNode>;
    };
    about: {
      edges: Array<AboutNode>;
    };
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
