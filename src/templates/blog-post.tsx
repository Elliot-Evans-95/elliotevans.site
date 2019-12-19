import * as React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../components/navigation';
import { BlogPostWrapper, Main } from '../styles/styles';
import Blobs, { PageType } from '../blobs/blobs';
import Footer from '../components/footer';
import Banner from '../components/banner';
import { IHeaderQuery } from '../models/home.types';

interface IndexBlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
      };
      html: any;
    };
    allFile: IHeaderQuery;
  };
}

export default ({ data }: IndexBlogPostProps) => {
  return (
    <div className={'appGrid'}>
      <Navigation />
      <Main>
        <Blobs pageType={PageType.POST} />
        <Banner header={data.allFile.edges[0].node.childSiteJson.header} />
        <BlogPostWrapper>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </BlogPostWrapper>
      </Main>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
