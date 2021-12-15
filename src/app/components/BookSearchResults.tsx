import { Grid } from '@mui/material';
import * as React from "react";
import { Book } from '../types/types';
import BookComponent from "./BookComponent";
import "./BookSearchResults.css";

interface ShowBookResultsProps {
  currentList: Book[]
 }

const ShowSearchResults: React.FC<ShowBookResultsProps> = (props) => {
  const { currentList } = props;

  const listItems = currentList.map((media) => {
    return <BookComponent book={media} />;
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

export default ShowSearchResults
