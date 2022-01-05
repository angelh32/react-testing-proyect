import { Grid } from '@mui/material';
import * as React from "react";
import { Book } from '../types/types';
import BookComponent from "./BookComponent";
import { AppContext } from './BookContext';

export interface ShowBookResultsProps {
  currentList: Book[];
}

const BookSearchResults: React.FC<ShowBookResultsProps> = (props) => {

  const { currentList } = props;

  const listItems = currentList.map((media) => {
    return <BookComponent key={media.key} book={media} />;
  });
  if (currentList.length == 0) {
    return <h5>No results :(</h5>;
  }
  return (
      <Grid
        sx={{ width: 1024, margin: 'auto' }}
        container
        spacing={4}
      >
        {listItems}
      </Grid>
  );
};

export default BookSearchResults
