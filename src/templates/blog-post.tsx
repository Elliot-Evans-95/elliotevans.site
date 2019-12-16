import * as React from "react";
import { graphql } from "gatsby";
import Navigation from '../components/navigation';
import { BlogPostWrapper, Main } from '../styles/styles';
import Blobs from '../blobs/blobs';
import Footer from '../components/footer';
import Banner from '../components/banner';
import { IHeaderQuery } from '../pages';

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
        {/*<Blobs props={location.pathname} pageType={"post"} />*/}
        <Blobs props={"test"} pageType={"post"} />
        <Banner
          header={
            data.allFile.edges[0].node.childSiteJson.header
          }
        />
        <BlogPostWrapper>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </BlogPostWrapper>
      </Main>
      <Footer/>
    </div>
  )
}

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
