import './Home.css';
import { fetchPosts } from '../shared/actions/markdown';
import { Meta } from '../shared/meta/meta';

class Index {
  componentDidMount() {
    const title = 'Elliot Evans - Home';
    const desc = 'Home Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

    fetchPosts();
  }
}
