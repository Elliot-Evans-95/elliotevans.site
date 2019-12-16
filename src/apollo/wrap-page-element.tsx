import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './client';

// @ts-ignore
export const wrapPageElement = ({ element, props }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
