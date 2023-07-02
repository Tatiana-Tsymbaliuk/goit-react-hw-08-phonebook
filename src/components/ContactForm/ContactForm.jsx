import React from 'react';
import { Form } from './ContactForm.styled';
import { addContact } from '../API/API';
import { Button, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const checkDuplicateName = value => {
    let isUnique = true;
    contacts.map(item => {
      if (item.name.toLowerCase() === value.toLowerCase()) {
        isUnique = false;
      }
      return isUnique;
    });
    return isUnique;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (checkDuplicateName(name) === true) {
      dispatch(addContact({ name, number }));
      form.reset();
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></TextField>

      <TextField
        id="outlined-basic"
        label="Telephone"
        variant="outlined"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></TextField>
      <Button variant="contained" size="small" fullWidth={false} type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export { ContactForm };
