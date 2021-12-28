import { Grid } from '@mui/material';
import * as React from "react";
import { Book } from '../types/types';
import BookComponent from "./BookComponent";
import "./BookSearchResults.css";

interface BookDetailsProps {
  currentBook: Book
 }

const BookDetails: React.FC<BookDetailsProps> = (props) => {
  const { currentBook } = props;
  console.log("LX - currentBook", currentBook)

  return (
    <p>{currentBook.name}</p>
  );
};

export default BookDetails
