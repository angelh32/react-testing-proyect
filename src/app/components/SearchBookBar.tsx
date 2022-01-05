import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { callApiBook } from '../tools/helpers';
import { Book } from '../types/types';
import BookDetails from './BookDetails';
import BookSearchResults from './BookSearchResults';
import { AppContext } from './BookContext';
import { Search, SearchForm, StyledInputBase } from './SearchBookBar.styles';

interface SearchShowBarProps {}

const SearchShowBar: React.FC<SearchShowBarProps> = (props) => {
  const [query, setQuery] = useState<string>('mistborn');
  const [bookList, setBookList] = React.useState<Book[]>([]);
  const [currentSelected, setCurrentSelected] = React.useState<Book>(
    {},
  );

  const getShows = async (filter: string) => {
    return callApiBook(filter).then((result) => {
      setBookList(result);
    });
  };

  function handleSearch(action: React.FormEvent<HTMLFormElement>) {
    action.preventDefault();
    getShows(query);
  }

  useEffect(() => {
    if (!bookList.length)
      getShows(query);
  });

  const handleOnChange = (action: any) => {
    action.preventDefault();
    setQuery(action.target.value);
  };
  return (
    <>
      <AppContext.Provider
        value={{ currentSelected, setCurrent: setCurrentSelected }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 3 }}
              >
                Shows
              </Typography>
              <SearchForm onSubmit={handleSearch}>
                <Search>
                  <StyledInputBase
                    value={query}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleOnChange}
                  />
                </Search>
                <Button type="submit" color="inherit">
                  Search
                </Button>
              </SearchForm>
            </Toolbar>
          </AppBar>
        </Box>
        <Router>
          <Switch>
            <Route path="/" exact>
              <BookSearchResults
                currentList={bookList}
              ></BookSearchResults>
            </Route>
            <Route path="/book/:id">
              <BookDetails />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default SearchShowBar;
