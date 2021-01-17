import * as React from 'react';
import { ReactElement } from 'react';

export const renderBooksFromTimeRead = (timeToRead: number): ReactElement => {
  if (timeToRead >= 3) {
    return <span>📚</span>;
  }

  const ManyBooks = Array.from(Array(timeToRead), (_, index) => (
    <span key={index}>📙</span>
  ));

  return <>{ManyBooks}</>;
};
