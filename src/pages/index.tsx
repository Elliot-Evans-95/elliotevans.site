import * as React from 'react';
import { graphql } from 'gatsby';
import { Main, ToggleTheme } from '../styles/styles';
import Footer from '../components/footer';

import Home from '../components/home/home';
import Helmet from 'react-helmet';
import { FixedImage, HomeProps } from '../models/home.types';

import '../styles/index.css';
import { IHeader } from '../models/shared.types';
import Header from '../components/header';
import AltCard from '../components/altCard';

export default class extends React.Component<HomeProps, {}> {
  private readonly _header: IHeader;
  private readonly _imageSrc: FixedImage;
  private readonly _about: string;

  constructor(props: HomeProps, context: Object) {
    super(props, context);

    const h = this.props.data.allFile.edges.filter(
      edge => {
        if(edge.node.childSiteJson) {
          return edge.node.childSiteJson.header
        }

        return
      }
    );

    // @ts-ignore
    this._header = h.find(x => x.node.childSiteJson.header).node.childSiteJson.header;
    this._imageSrc = this.props.data.profileImage.childImageSharp.fixed;


    const a = this.props.data.allFile.edges.filter(
      edge => {
        if(edge.node.childSiteJson) {
          return edge.node.childSiteJson.about
        }

        return
      }
    );

    // @ts-ignore
    this._about = a.find(x => x.node.childSiteJson.about).node.childSiteJson.about
  }

  public render() {
    // TODO: move into a hook
    const title = 'Elliot Evans - Home';
    const desc = 'Home Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

    return (
      <div className={'appGrid'}>
        {/* TODO: Move Meta into a component*/}
        <Helmet>
          <title>{title}</title>
          <meta name={'description'} content={desc} />
          <meta name={'keywords'} content={keywords} />
        </Helmet>

        <ToggleTheme>🌑</ToggleTheme>

        <Main>
          <Header header={this._header} imageSrc={this._imageSrc} />
          <AltCard about={this._about} />
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
    allFile {
      edges {
        node {
          id
          childSiteJson {
            id
            header {
              icon
              heading
            }
            about
          }
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
