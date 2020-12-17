import React from 'react';
import classes from './search-bar.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import {InputAdornment, TextField} from "@material-ui/core";

const SearchBar = () => {
    return (
        <div className={classes.container}>
            <TextField label="Search"
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="end">
                                   <SearchIcon/>
                               </InputAdornment>
                           ),
                       }}
            />
        </div>
    )
}

export default SearchBar;
