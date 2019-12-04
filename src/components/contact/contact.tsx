import * as React from 'react';
import { graphql } from 'gatsby';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface ContactPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<ContactPageProps, {}> {
  constructor(props: ContactPageProps, context: any) {
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
        <p>Contact</p>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
