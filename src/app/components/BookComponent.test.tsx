import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Book } from '../types/types';
import BookComponent, { BookComponentProps } from './BookComponent';
import {createMemoryHistory} from 'history'
import { AppContext } from './BookContext';
import { StepButton } from '@mui/material';
import Sinon from "sinon";

const mockBooks: Book[] = [
  {
    name: 'test',
    key: "asdf",
    authors:["author 1"]
  },
];

const setCurrent = Sinon.spy();

describe('<BookComponent />', () => {
  function renderComponent(props: Partial<BookComponentProps> = {}) {
    const defaultProps: BookComponentProps = {
      book: mockBooks[0],
    };

    const history = createMemoryHistory();

    return render(
      <AppContext.Provider value={{ setCurrent }}>
        <Router>
          <BookComponent {...defaultProps} {...props} />
        </Router>
      </AppContext.Provider>,
    );
  }

  describe("When user render a card", () => {
    test('it show the card properly', async () => {
      const { queryAllByText } = renderComponent();
      expect(queryAllByText('test')[0]).toHaveTextContent('test');
      expect(queryAllByText('author 1')[0]).toHaveTextContent('author 1');
    });
  });
  describe("When the user click the link", () => {
    test('it redirects to another page', async () => {
      const { getByText } = renderComponent();
      fireEvent.click(getByText("test"));
      Sinon.assert.calledOnce(setCurrent);
    });
  });
});
