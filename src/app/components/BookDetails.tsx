import { Grid } from '@mui/material';
import * as React from "react";
import { Book } from '../types/types';
import BookComponent from "./BookComponent";
import { AppContext } from './BookContext';

interface BookDetailsProps {
 }

const BookDetails: React.FC<BookDetailsProps> = (props) => {
  const { currentSelected } = React.useContext(AppContext);

  return (
    <p>{currentSelected.name}</p>
  );
};

export default BookDetails
