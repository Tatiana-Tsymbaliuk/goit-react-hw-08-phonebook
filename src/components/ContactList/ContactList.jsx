import { List, Element } from './ContactList.module';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../API/API';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import styles from './ContactList.module.css';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDelete = itemId => {
    dispatch(deleteContact(itemId));
  };

  function filterArray() {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }
  const filteredArray = filterArray();
  return isRefreshing ? (
    ''
  ) : (
    <List>
      {filteredArray
        ? filteredArray.map(({ name, number, id }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {number}
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => handleDelete(id)}
                  id={id}
                  className={styles.deleteButton}
                >
                  Delete
                </Button>
              </Element>
            );
          })
        : contacts.map(({ name, number, id }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {number}
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleDelete(id)}
                  id={id}
                >
                  Delete
                </Button>
              </Element>
            );
          })}
    </List>
  );
};

export { ContactList };
