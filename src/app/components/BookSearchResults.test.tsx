import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Book } from '../types/types';
import BookComponent, { BookComponentProps } from './BookComponent';
import {createMemoryHistory} from 'history'
import { AppContext } from './BookContext';
import { StepButton } from '@mui/material';
import Sinon from "sinon";
import BookDetails from './BookDetails';
import BookSearchResults, { ShowBookResultsProps } from './BookSearchResults';


const mockBooks: Book[] = [
  {
    name: 'test',
    key: "asdf1",
    authors:["author 1"]
  },
  {
    name: 'test2',
    key: "asdf2",
    authors:["author 2", "author 3"]
  },
];

const setCurrent = Sinon.spy();

describe('<BookDetails />', () => {
  function renderComponent(props: Partial<ShowBookResultsProps> = {}) {
    const defaultProps: ShowBookResultsProps = {
      currentList: mockBooks
    };

    const history = createMemoryHistory();

    return render(
      <AppContext.Provider value={{ currentSelected: mockBooks[0] }}>
        <Router>
          <BookSearchResults {...defaultProps} {...props} />
        </Router>
      </AppContext.Provider>,
    );
  }

  describe("when there is no results", () => {
    test('it show the card titles properly', async () => {
      const { queryAllByTestId } = renderComponent({ currentList: [] });
      expect(queryAllByTestId('card').length).toEqual(0);
    });
    test('it show the error message', async () => {
      const { queryByText } = renderComponent({ currentList: [] });
      expect(queryByText('No results :(')).toHaveTextContent('No results :(');
    });
  });
  describe("when there is some results", () => {
    test('it show the card titles properly', async () => {
      const { queryByText } = renderComponent();
      expect(queryByText('test')).toHaveTextContent('test');
      expect(queryByText('test2')).toHaveTextContent('test2');
    });
    test('it show the the correct number of cards', async () => {
      const { queryAllByTestId } = await renderComponent();
      expect(queryAllByTestId('card').length).toEqual(mockBooks.length);
    });
  });
});
