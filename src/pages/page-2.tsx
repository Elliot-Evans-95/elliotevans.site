import * as React from 'react';
import { graphql } from "gatsby";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface Page2PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<Page2PageProps, {}> {
  constructor(props: Page2PageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h1>Elliot Evans Site</h1>
        <p>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Page 2</p>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query Page2Query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
