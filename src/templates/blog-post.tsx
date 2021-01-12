import * as React from 'react';
import { graphql } from 'gatsby';
import {
  BlogCard,
  BlogCardInfo,
  BlogCardInfoCite,
  BlogPostWrapper,
  CardContainer,
  Main,
  ToggleTheme,
} from '../styles/styles';
import Footer from '../components/footer';
import { IHeaderQuery } from '../models/home.types';
import BackToHome from '../components/backToHome';
import Icons from '../components/icons';
import Newsletter from '../components/newsletter';
import { renderBooksFromTimeRead } from '../utils/renderBooksFromTimeRead';

interface IndexBlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
        intro: string;
      };
      html: any;
      timeToRead: number;
    };
    allFile: IHeaderQuery;
  };
}

export default ({ data }: IndexBlogPostProps) => {
  const intro = data.markdownRemark.frontmatter.intro;

  return (
    <div className={'appGrid'}>
      <BackToHome />
      <ToggleTheme>🌑</ToggleTheme>
      <Main>
        <BlogPostWrapper>
          <Icons page="blog"/>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <BlogCardInfo>
            <BlogCardInfoCite>{data.markdownRemark.frontmatter.date}</BlogCardInfoCite>
            <div>{renderBooksFromTimeRead(data.markdownRemark.timeToRead)}</div>
          </BlogCardInfo>

          {intro !== "" && (
            <CardContainer>
              <p>{intro}</p>
            </CardContainer>
          )}

          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </BlogPostWrapper>
        <Newsletter />
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
        date(formatString: "DD MMMM, YYYY")
        intro
      }
      timeToRead
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
            }
          }
        }
      }
    }
  }
`;
