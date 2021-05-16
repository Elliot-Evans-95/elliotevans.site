import * as React from 'react';
import { VNode } from 'preact';

export const renderBooksFromTimeRead = (timeToRead: number): VNode => {
  if (timeToRead >= 3) {
    return <span>📚</span>;
  }

  const ManyBooks = Array.from(Array(timeToRead), (_, index) => (
    <span key={index}>📙</span>
  ));

  return <>{ManyBooks}</>;
};
