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


const mockBooks: Book[] = [
  {
    name: 'test',
    key: "asdf",
    authors:["author 1"]
  },
];

const setCurrent = Sinon.spy();

describe('<BookDetails />', () => {
  function renderComponent(props: Partial<BookComponentProps> = {}) {
    const defaultProps: BookComponentProps = {
      book: mockBooks[0],
    };

    const history = createMemoryHistory();

    return render(
      <AppContext.Provider value={{ currentSelected: mockBooks[0] }}>
        <Router>
          <BookDetails {...defaultProps} {...props} />
        </Router>
      </AppContext.Provider>,
    );
  }

  describe("When user render a card", () => {
    test('it show the card properly', async () => {
      const { queryAllByText } = renderComponent();
      expect(queryAllByText('test')[0]).toHaveTextContent('test');
    });
  });
});
