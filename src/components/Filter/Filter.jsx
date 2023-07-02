import React from 'react';

import { Title, Container } from './Filter.module';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { filterContact } from '../../store/Filter/filterSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <Container>
      <Title>
        Find Contacts by name <AiOutlineSearch />
        <TextField
          id="outlined-basic"
          label="Input Filter"
          variant="outlined"
          size="small"
          onChange={event => handleFilter(event)}
        ></TextField>
      </Title>
    </Container>
  );
};

export { Filter };
