
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Book } from "../types/types";
import { AppContext } from './BookContext';

export interface BookComponentProps {
  book: Book;
}
const BookComponent: React.FC<BookComponentProps> = (props) => {
    const { book } = props;
    const { setCurrent } = React.useContext(AppContext);
    const authors = props.book.authors.map(item=>{
        return <Typography gutterBottom component="p" key={`${Math.floor(Math.random() * 10000)}`}>{item}</Typography>
    })
    const key = props.book.key.split('/')[1];
    const url=`/book/${book.key.split("\/")[2]}`
    const handleSelect = (action: any) => {
      setCurrent(book);
    };
    return (
      <Grid key={key} item xs={6} md={3}>
      <Card key={key} data-testid="card" sx={{ maxWidth: 345, height: 300 }}>
        <Link to={url} onClick={handleSelect}>
          <CardContent>
            <Typography gutterBottom style={{fontSize: "24"}} component="div">
              {props.book.name}
            </Typography>
          </CardContent>
        </Link>
        {authors}
      </Card>
      </Grid>
    );
}

export default BookComponent
