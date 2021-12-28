
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Book } from "../types/types";

export interface BookComponentProps {
  book: Book;
  setCurrent: (current: Book) => void;
}

const BookComponent: React.FC<BookComponentProps> = (props) => {
  const {book, setCurrent} = props;
    const authors = props.book.authors.map(item=>{
        return <Typography gutterBottom component="p" key={`${Math.floor(Math.random() * 10000)}`}>{item}</Typography>
    })
    let history = useHistory();
    const key = props.book.key.split('/')[1];
    const url=`/book/${book.key.split("\/")[2]}`
    const handleSelect = (action: any) => {
      setCurrent(book);
      // history.push(url);
    };
    return (
      <Grid key={key} item xs={6} md={3}>
        <Card sx={{ maxWidth: 345, height: 200 }}>
          <Link to={url} onClick={handleSelect}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
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
