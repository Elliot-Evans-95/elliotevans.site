import * as React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../styles/styles';
import Footer from '../components/footer';

// default style stuff
import '../styles/index.css';

// home stuff
import Navigation from '../components/navigation';
import { Home } from '../components/home/home';
import Blobs from '../blobs/blobs';

// interface IndexPageProps {
//   data: {
//     site: {
//       header: IHeader;
//     };
//   };
// }

export interface IHeader {
  icon: string;
  heading: string;
  subHeading: string;
}

// export default class extends React.Component<IndexPageProps, {}> {
export default class extends React.Component<any, {}> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  public render() {
    console.log(this.props);
    return (
      <div className={'appGrid'}>
        <Navigation />
        <React.StrictMode>
          <Main>
            <Blobs props={this.props} />
            <Home props={this.props}/>
          </Main>
        </React.StrictMode>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allFile {
      edges {
        node {
          extension
          dir
          modifiedTime
        }
      }
    }
  }
`;
