import { Grid } from '@mui/material';
import * as React from "react";
import { Book } from '../types/types';
import BookComponent from "./BookComponent";
import "./BookSearchResults.css";

interface ShowBookResultsProps {
  currentList: Book[];
  setCurrent: (current: Book) => void;
}

const BookSearchResults: React.FC<ShowBookResultsProps> = (props) => {
  const { currentList, setCurrent } = props;

  const listItems = currentList.map((media) => {
    return <BookComponent book={media} setCurrent={setCurrent} />;
  });
  if (currentList.length == 0) {
    return <h5>No results :(</h5>;
  }
  return (
    <Grid sx={{width: 1024, margin: "auto"}} container spacing={4}>
      {listItems}
    </Grid>
  );
};

export default BookSearchResults
