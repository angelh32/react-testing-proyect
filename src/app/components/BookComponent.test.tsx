import { render } from '@testing-library/react';
import React from 'react';
import { Book } from '../types/types';
import BookComponent, { BookComponentProps } from './BookComponent';

function Promisedresponse(data: any){
  return new Promise((resolve, _reject)=>{
    return resolve(data)
  })
}

const mockBooks: Book[] = [
  {
    name: 'test',
    key: "asdf",
    authors:["author 1"]
  },
];

describe('<BookComponentProps />', () => {
  function renderLoginForm(props: Partial<BookComponentProps> = {}) {
    const defaultProps: BookComponentProps = {
      book: mockBooks[0],
    };

    return render(<BookComponent {...defaultProps} {...props} />);
  }

  test('should display', async () => {
    const { queryAllByText } = renderLoginForm();
    expect(queryAllByText('test')[0]).toHaveTextContent('test');
  });
});
