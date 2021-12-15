import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { useState } from 'react';
import { callApiBook } from '../tools/helpers';
import ShowSearchResults from './BookSearchResults';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


interface SearchShowBarProps { }

const SearchShowBar: React.FC<SearchShowBarProps> = (props) => {

    const [query, setQuery] = useState<string>("mistborn")
    const [showList, setShowList] = React.useState<any[]>([]);

    const getShows = async (filter: string) => {
      return callApiBook(filter).then((result) => {
        setShowList(result);
      });
    };


    function handleSearch(action: React.FormEvent<HTMLFormElement>) {
      action.preventDefault()
      getShows(query);
    }

    const handleOnChange = (action) => {
      action.preventDefault()
        setQuery(action.target.value)
    }
    return (
      <>
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
              <form className="searchForm" onSubmit={handleSearch}>
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
              </form>
            </Toolbar>
          </AppBar>
        </Box>
        <ShowSearchResults currentList={showList}></ShowSearchResults>
      </>
    );
}

export default SearchShowBar
