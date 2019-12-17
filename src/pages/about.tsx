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
import Helmet from 'react-helmet';

interface IndexPageProps {
  location: Location;
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
  private readonly _header: IHeader;
  private readonly _about: IPageAbout;

  constructor(props: any, context: any) {
    super(props, context);

    this._header = this.props.data.allFile.edges.filter(
      edge => edge.node.childSiteJson.header !== null
    )[0].node.childSiteJson.header;
    this._about = this.props.data.allFile.edges.filter(
      edge => edge.node.childSiteJson.about !== null
    )[0].node.childSiteJson.about;
  }

  public render() {
    const title = 'Elliot Evans - About';
    const desc = 'About Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

    if (this._about && this._header) {
      return (
        <div className={'appGrid'}>
          <Main>
            <Helmet>
              <title>{title}</title>
              <meta name={'description'} content={desc} />
              <meta name={'keywords'} content={keywords} />
            </Helmet>

          </Main>
          <Navigation />
          <React.StrictMode>
            <Main>
              <Blobs props={this.props.location.pathname} />
              <Banner header={this._header} />
              <About about={this._about} />
            </Main>
          </React.StrictMode>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
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
    allFile(
      filter: {
        name: { in: ["header", "about"] }
        sourceInstanceName: { eq: "site" }
      }
    ) {
      edges {
        node {
          id
          childSiteJson {
            id
            header {
              icon
              heading
              subHeading
            }
            about {
              paraOne
              paraTwo
              paraThree
              paraFour
            }
          }
        }
      }
    }
  }
`;
