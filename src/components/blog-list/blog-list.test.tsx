// import { IHomePageProps } from './blog-list.type';
// import { render, screen, waitFor } from '@testing-library/preact';
// import BlogList from './blog-list';

// jest.mock('@linaria/react', () => {
//   function styled(tag: string) {
//     return jest.fn(() => `mock-styled.${tag}`);
//   }
//   return {
//     styled: new Proxy(styled, {
//       get(o, prop: string) {
//         return o(prop);
//       },
//     }),
//   };
// });
//
// const mockTitle = 'mock-title';
//
// describe('BlogList', () => {
//   const props: IHomePageProps = {
//     blog: [
//       {
//         node: {
//           id: '1',
//           excerpt: '',
//           timeToRead: 1,
//           frontmatter: {
//             date: 'mock-date',
//             title: mockTitle,
//             intro: 'mock-intro',
//           },
//           fields: {
//             slug: 'mock-slug',
//           },
//         },
//       },
//     ],
//   };
//
//   test('Blog title appears in the component', async () => {
//     render(<BlogList {...props} />);
//
//     const title = screen.getByText(mockTitle);
//
//     await waitFor(() => {
//       expect(title).toBeInTheDocument();
//     });
//   });
// });

test('TODO', async () => {
  expect(true).toBe(true);
});
