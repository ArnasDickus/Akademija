import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import * as S from './search-bar.styles';

const SearchBar = (): JSX.Element => {
  return (
    <S.Container>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        label="Search"
      />
    </S.Container>
  );
};

export default SearchBar;
