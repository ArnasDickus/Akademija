import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {InputAdornment, TextField} from "@material-ui/core";

import classes from './search-bar.module.scss';

const SearchBar = (): JSX.Element => {
    return (
        <div className={classes.container}>
            <TextField InputProps={{
                           startAdornment: (
                               <InputAdornment position="end">
                                   <SearchIcon/>
                               </InputAdornment>
                           ),
                       }}
                       label="Search"
            />
        </div>
    )
}

export default SearchBar;
