import * as React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../styles/styles';
import Footer from '../components/footer';

import Navigation from '../components/navigation';
import Blobs from '../blobs/blobs';
import Banner from '../components/banner';
import Projects from '../components/projects/projects';
import Helmet from 'react-helmet';
import { ProjectPageProps } from '../models/project.types';

import '../styles/index.css';

export default class extends React.Component<ProjectPageProps, {}> {
  constructor(props: any, context: Object) {
    super(props, context);
  }

  public render() {
    const title = 'Elliot Evans - Contact';
    const desc = 'Contact Page';
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
        <React.StrictMode>
          <Main>
            <Blobs props={this.props.location.pathname} />
            <Banner
              header={
                this.props.data.allFile.edges[0].node.childSiteJson.header
              }
            />
            <Projects props={this.props.data.allMarkdownRemark.edges} />
          </Main>
        </React.StrictMode>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage
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
