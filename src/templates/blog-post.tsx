import * as React from 'react';
import { graphql } from 'gatsby';
import { renderBooksFromTimeRead } from '../utils/renderBooksFromTimeRead';
import { VNode } from 'preact';
import { IHeaderQuery } from '../models/home.types';
import {
  BlogCardInfo,
  BlogCardInfoCite,
  CardContainer,
  Main,
  ToggleTheme,
} from '../styles/common.style';
import Footer from '../components/footer';
import BackToHome from '../components/backToHome';
import Icons from '../components/icons/icons';
import Newsletter from '../components/newsletter/newsletter';
import Head from '../components/head/head';

interface IndexBlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
        intro: string;
      };
      html: string;
      timeToRead: number;
    };
    allFile: IHeaderQuery;
  };
}

export default ({ data }: IndexBlogPostProps): VNode => {
  const intro = data.markdownRemark.frontmatter.intro;
  const desc = 'Blog Page';
  const keywords =
    'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

  return (
    <div className={'appGrid'}>
      <Head
        title={data.markdownRemark.frontmatter.title}
        description={desc}
        keywords={keywords}
      />
      <BackToHome />
      <ToggleTheme>🌑</ToggleTheme>
      <Main>
        <section>
          <Icons page="blog" />
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <BlogCardInfo>
            <BlogCardInfoCite>
              {data.markdownRemark.frontmatter.date}
            </BlogCardInfoCite>
            <div>{renderBooksFromTimeRead(data.markdownRemark.timeToRead)}</div>
          </BlogCardInfo>

          {intro !== '' && (
            <CardContainer>
              <p>{intro}</p>
            </CardContainer>
          )}

          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </section>
        <Newsletter />
      </Main>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
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
