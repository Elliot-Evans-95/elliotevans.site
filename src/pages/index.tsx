import * as React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../styles/styles';
import Footer from '../components/footer';

import Navigation from '../components/navigation';
import Home from '../components/home/home';
import Blobs, { PageType } from '../blobs/blobs';
import Banner from '../components/banner';
import Helmet from 'react-helmet';
import { IIndexProps, IndexPageProps } from '../models/home.types';

import '../styles/index.css';

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IIndexProps, context: Object) {
    super(props, context);
  }

  public render() {
    const title = 'Elliot Evans - Home';
    const desc = 'Home Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

    return (
      <div className={'appGrid'}>
        <Helmet>
          <title>{title}</title>
          <meta name={'description'} content={desc} />
          <meta name={'keywords'} content={keywords} />
        </Helmet>

        <Navigation />
        <Main>
          <Blobs pageType={PageType.DEFAULT} />
          <Banner
            header={
              this.props.data.allFile.edges[0].node.childSiteJson.header
            }
          />
          <Home props={this.props.data.allMarkdownRemark.edges} />
        </Main>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
    allFile(
      filter: { name: { eq: "header" }, sourceInstanceName: { eq: "site" } }
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
          }
        }
      }
    }
  }
`;
