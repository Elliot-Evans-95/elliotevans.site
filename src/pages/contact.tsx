import * as React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../styles/styles';
import Footer from '../components/footer';

import Navigation from '../components/navigation';
import Blobs, { PageType } from '../components/blobs/blobs';
import Banner from '../components/banner';
import Contact from '../components/contact/contact';
import Helmet from 'react-helmet';
import { ContactPageProps, IContactProps } from '../models/contact.types';

import '../styles/index.css';

export default class extends React.Component<ContactPageProps, {}> {
  constructor(props: IContactProps, context: Object) {
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
        <Main>
          <Blobs pageType={PageType.CONTACT} />
          <Banner
            header={this.props.data.allFile.edges[0].node.childSiteJson.header}
          />
          <Contact />
        </Main>
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
