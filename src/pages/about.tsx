import * as React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../styles/styles';
import Footer from '../components/footer';

import Navigation from '../components/navigation';
import Blobs, { PageType } from '../blobs/blobs';
import Banner from '../components/banner';
import About from '../components/about/about';
import Helmet from 'react-helmet';
import { AboutPageProps, IAboutProps, IPageAbout } from '../models/about.types';

import '../styles/index.css';
import { IHeader } from '../models/shared.types';

export default class extends React.Component<AboutPageProps, {}> {
  private readonly _header: IHeader;
  private readonly _about: IPageAbout;

  constructor(props: IAboutProps, context: Object) {
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
          <Main>
            <Blobs pageType={PageType.ABOUT} />
            <Banner header={this._header} />
            <About about={this._about} />
          </Main>
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
