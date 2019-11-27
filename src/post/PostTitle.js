import { BlogCardLink, BlogCardTitle } from './PostTitle.style';

const PostTitle = ({ text }) => (
  <BlogCardLink to={text[0].url}>
    <BlogCardTitle>
      <h2>{text[0].title}</h2>
    </BlogCardTitle>
  </BlogCardLink>
);
