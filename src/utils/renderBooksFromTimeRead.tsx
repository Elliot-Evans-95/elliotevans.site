import * as React from 'react';

export const renderBooksFromTimeRead = (timeToRead: number) => {
  if(timeToRead >= 3) {
    return <span>📚</span>
  }

  return Array.from(Array(timeToRead), (_, index) => <span key={index}>📙</span>);
};
