import * as React from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';
import Footer from '../components/footer';

import Home from '../components/home/home';
import Head from '../components/head/head';
import { FixedImage, HomeProps } from '../models/home.types';

import '../styles/index.css';
import { IHeader } from '../models/shared.types';
import Header from '../components/header';
import { Main, ToggleTheme } from '../styles/common.style';
import Card from '../components/card/card';

const title = 'Elliot Evans - Home';
const desc = 'Home Page';
const keywords =
  'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

export default class extends React.Component<
  HomeProps,
  Record<string, unknown>
> {
  private readonly _header: IHeader;
  private readonly _imageSrc: FixedImage;
  private readonly _about: string;

  constructor(props: HomeProps, context: Record<string, unknown>) {
    super(props, context);

    const defaultHeader: IHeader = {
      heading: '',
      icon: '',
    };

    const about = this.props.data.about.edges.find((a) => a.node.about);
    const header = this.props.data.header.edges.find((h) => h.node.header);

    this._imageSrc = this.props.data.profileImage.childImageSharp.fixed;
    this._about = about ? about.node.about : '';
    this._header = header ? header.node.header : defaultHeader;
  }

  public render(): ReactElement {
    return (
      <div className={'appGrid'}>
        <Head title={title} description={desc} keywords={keywords} />

        <ToggleTheme>🌑</ToggleTheme>

        <Main>
          <Header header={this._header} imageSrc={this._imageSrc} />
          <Card about={this._about} />
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
            intro
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
    header: allSiteJson {
      edges {
        node {
          header {
            icon
            heading
          }
        }
      }
    }
    about: allSiteJson {
      edges {
        node {
          about
        }
      }
    }
    profileImage: file(relativePath: { eq: "profile-image.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;
