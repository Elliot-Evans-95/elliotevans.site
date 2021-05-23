import { render, screen, waitFor } from '@testing-library/preact';
import { renderBooksFromTimeRead } from './renderBooksFromTimeRead';

describe('renderBooksFromTimeRead', () => {
  const bookEmojiInString = '📙';
  const bookStackEmojiInString = '📚';

  test('Find no book emoji in the dom for the 0 number of timeToRead', async () => {
    render(renderBooksFromTimeRead(0));

    const numberOfBooks = screen.queryAllByText(bookEmojiInString);

    await waitFor(() => {
      expect(numberOfBooks.length).toBe(0);
    });
  });

  test('Find 1 book emoji in the dom for the 1 number of timeToRead', async () => {
    render(renderBooksFromTimeRead(1));

    const numberOfBooks = screen.queryAllByText(bookEmojiInString);

    await waitFor(() => {
      expect(numberOfBooks.length).toBe(1);
    });
  });

  test('Shows 1 book emoji for the 1 number of timeToRead', async () => {
    render(renderBooksFromTimeRead(1));

    const numberOfBooks = screen.queryAllByText(bookEmojiInString);

    await waitFor(() => {
      expect(
        numberOfBooks.map((bookElement) => bookElement.textContent)[0],
      ).toBe(bookEmojiInString);
    });
  });

  test('Shows book stack emoji for the 3 number of timeToRead', async () => {
    render(renderBooksFromTimeRead(3));

    const bookStack = screen.getByText(bookStackEmojiInString);

    await waitFor(() => {
      expect(bookStack.textContent).toBe(bookStackEmojiInString);
    });
  });
});
