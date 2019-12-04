import * as React from 'react';
import { graphql } from 'gatsby';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface AboutPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<AboutPageProps, {}> {
  constructor(props: AboutPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <h1>Elliot Evans Site</h1>
        <p>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>About</p>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
