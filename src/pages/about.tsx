import * as React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../styles/styles';
import Footer from '../components/footer';

// default style stuff
import '../styles/index.css';

// about stuff
import Navigation from '../components/navigation';
import Blobs from '../blobs/blobs';
import Banner from '../components/banner';
import About from '../components/about/about';

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<IEdge>;
    };
    allFile: IHeaderQuery;
  };
}

interface IHeaderQuery {
  edges: Array<IHeaderNode>;
}

interface IHeaderNode {
  node: {
    id: string;
    childDataJson: {
      id: string;
      header: IHeader;
      about: string;
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
  };
  id: string;
}

export interface IHeader {
  icon: string;
  heading: string;
  subHeading: string;
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  // Hook into the edges and create variables for both header and about

  public render() {
    console.log(this.props.data.allFile.edges[0].node.childDataJson);
    return (
      <div className={'appGrid'}>
        <Navigation />
        <React.StrictMode>
          <Main>
            <Blobs props={this.props.location.pathname} />
            <Banner
              header={
                this.props.data.allFile.edges[0].node.childDataJson?.header
              }
            />
            <About
              about={
                this.props.data.allFile.edges[1].node.childDataJson?.about
              }
            />
          </Main>
        </React.StrictMode>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "data"}, extension: {eq: "json"}}) {
      edges {
        node {
          id
          childDataJson {
            header {
              icon
              heading
              subHeading
            }
            about
          }
        }
      }
    }
  }
`;
