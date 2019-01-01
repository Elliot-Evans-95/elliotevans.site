//@flow

import marked from 'marked';
import * as yamlFront from 'yaml-front-matter';
import { fetchProductsSuccess } from '.';

export function fetchPosts() {
  const test = _mapFiles(
    require.context('./../../assets/posts', true, /\.md$/)
  );
  const markdownFiles = [];

  for (const key in test) {
    if (!test.hasOwnProperty(key)) continue;
    markdownFiles.push(test[key]);
  }

  return loadMarkdownData(markdownFiles);
}

function transformMarkdownContent(text) {
  const content = yamlFront.loadFront(text);

  return marked(content.__content);
}

function objectToArray(text) {
  const object = yamlFront.loadFront(text);

  return [
    object.date.toString(),
    object.path.toString(),
    object.title.toString(),
    object.introduction.toString()
  ];
}

function _mapFiles(context) {
  function stripStartingSlash(string) {
    if (string.charAt(0) === '/') {
      return string.substr(1);
    }

    return string;
  }

  const keys = context.keys();
  const values = keys.map(context);
  return keys.reduce(
    (accumulator, key, index) => ({
      ...accumulator,
      [key]: stripStartingSlash(values[index])
    }),
    {}
  );
}

function loadMarkdownData(markdownFiles) {
  return dispatch => {
    for (const [index, file] of markdownFiles.entries()) {
      fetch(file)
        .then(response => {
          if (response.status === 200) {
            return response.text();
          }

          throw new Error(`Error: ${response.status}, ${response.statusText}`);
        })
        .then(text => {
          const mappedHeader = {
            date: objectToArray(text)[0],
            url: objectToArray(text)[1],
            title: objectToArray(text)[2],
            introduction: objectToArray(text)[3]
          };

          let mapTest = {
            id: index,
            html: transformMarkdownContent(text),
            header: [mappedHeader]
          };

          dispatch(fetchProductsSuccess(mapTest));

          return mapTest;
        });
    }
  };
}
