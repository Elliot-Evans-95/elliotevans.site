import marked from 'marked';
import * as yamlFront from 'yaml-front-matter';
import { Meta } from '../shared/meta/meta';

class Post {
  state = {
    header: null,
    markdown: null
  };

  static transformMarkdownContent(text) {
    const content = yamlFront.loadFront(text);

    return marked(content.__content);
  }

  static objectToArray(text) {
    const object = yamlFront.loadFront(text);

    return [
      object.date.toString(),
      object.path.toString(),
      object.title.toString()
    ];
  }

  componentDidMount() {
    const title = 'Elliot Evans - Post';
    const desc = 'Post Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

    document.getElementById('root').style.backgroundImage = 'url(../post.svg)';

    const markdownFile = require(`./../assets/posts/${
      this.props.match.params.id
    }.md`);
    this._loadMarkdownData(markdownFile);
  }

  render() {}

  _loadMarkdownData(markdownFile) {
    fetch(markdownFile)
      .then(response => response.text())
      .then(text => {
        this.setState({
          header: [Post.objectToArray(text)].map(head => ({
            date: head[0],
            url: head[1],
            title: head[2]
          })),
          markdown: [Post.transformMarkdownContent(text)]
        });
      });
  }
}
