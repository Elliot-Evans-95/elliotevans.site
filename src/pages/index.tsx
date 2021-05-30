import * as React from 'react';
import { Component, VNode } from 'preact';
import { graphql } from 'gatsby';

import Footer from '../components/footer';
import Home from '../components/home/home';
import Head from '../components/head/head';
import { FixedImage, HomeProps } from '../models/home.types';

import '../styles/index.css';
import { IHeader, Theme } from '../models/shared.types';
import Header from '../components/header';
import { Main, ToggleTheme } from '../styles/common.style';
import Card from '../components/card/card';

const title = 'Elliot Evans - Home';
const desc = 'Home Page';
const keywords =
  'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

export default class extends Component<HomeProps, Record<string, unknown>> {
  private readonly _header: IHeader;
  private readonly _profileImage: FixedImage;
  private readonly _about: string;
  private readonly _theme: Theme;

  constructor(props: HomeProps, context: Record<string, unknown>) {
    super(props, context);

    const defaultHeader: IHeader = {
      heading: '',
      icon: '',
    };

    const about = this.props.data.about.edges.find((a) => a.node.about);
    const header = this.props.data.header.edges.find((h) => h.node.header);

    this._profileImage = this.props.data.profileImage;
    this._about = about ? about.node.about : '';
    this._header = header ? header.node.header : defaultHeader;
    this._theme = window.matchMedia('(prefers-color-scheme: dark)')
      ? 'dark'
      : 'light';
  }

  public render(): VNode {
    return (
      <div className={'appGrid'}>
        <Head title={title} description={desc} keywords={keywords} />

        <ToggleTheme>
          {this._theme === 'dark' ? (
            <span role="img" aria-label="moon">
              🌑
            </span>
          ) : (
            <span role="img" aria-label="sun">
              ☀️
            </span>
          )}
        </ToggleTheme>

        <Main>
          <Header header={this._header} profileImage={this._profileImage} />
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
        gatsbyImageData(
          width: 80
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
