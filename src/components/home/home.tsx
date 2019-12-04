import * as React from 'react';
import { useEffect } from 'react';
import { Main } from '../../styles/styles';
import Banner from '../Banner';
import BlogList from '../blogList';
import Helmet from 'react-helmet';
import Blobs from '../../blobs/blobs';
import { IHeader } from '../../pages';

// const setMetaData = (title: string, desc: string, keywords: string) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name={'description'} content={desc}/>
//       <meta name={'keywords'} content={keywords}/>
//     </Helmet>
//   );
// };

export interface HomeComponentProps {
  props: {
    data: {
      site: {
        header: IHeader;
      };
    };
  };
}

export const Home = (home: HomeComponentProps) => {
  const title = 'Elliot Evans - Home';
  const desc = 'Home Page';
  const keywords = 'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

  // useEffect(() => {
  //   setMetaData(title, desc, keywords);
  //   props.dispatch(fetchPosts());
  // });

  // if (props.posts.length === 0) {
  //   return (
  //     <Main>
  //       <Blobs location={props.location} />
  //       <Banner text={props.posts[0].test} />
  //       <BlogList blog={props.posts[0].markdown} />
  //     </Main>
  //   );
  // } else {
  //   return (
  //     <Main>
  //       <Blobs props={props} />
  //       {/*<Banner text={props.posts[0].test} />*/}
  //       {/*<BlogList blog={props.posts[0].markdown} />*/}
  //     </Main>
  //   );
  // }

  return (
    <Main>
      <Helmet>
        <title>{title}</title>
        <meta name={'description'} content={desc}/>
        <meta name={'keywords'} content={keywords}/>
      </Helmet>
      <Banner header={home.props.data.site.header} />
    </Main>
  )
};


// Example Query for reading the markdown file
// query MyQuery {
//   allMarkdownRemark {
//     edges {
//       node {
//         id
//         html
//         excerpt
//         timeToRead
//       }
//     }
//   }
// }
