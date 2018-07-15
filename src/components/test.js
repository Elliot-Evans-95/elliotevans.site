import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.Articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    <h1>test</h1>
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const Test = connect(mapStateToProps)(ConnectedList);

export default Test;
