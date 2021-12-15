
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { Book } from "../types/types";

export interface BookComponentProps {
    book: Book
}

const BookComponent: React.FC<BookComponentProps> = (props) => {
    const authors = props.book.authors.map(item=>{
        return <Typography gutterBottom component="p" key={`${Math.floor(Math.random() * 10000)}`}>{item}</Typography>
    })
    const key = props.book.key.split('/')[1];
    return (
      <Grid key={key} item xs={6} md={3}>
        <Card sx={{ maxWidth: 345, height: 200 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.book.name}
            </Typography>
            {authors}
          </CardContent>
        </Card>
      </Grid>
    );
}

export default BookComponent
