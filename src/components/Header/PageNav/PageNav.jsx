import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Item } from './PageNav.module';
import styles from './PageNav.module.css';

import { useSelector } from 'react-redux';

export const PageNav = () => {
  const { isLogged } = useSelector(state => state.auth);

  return (
    <List>
      <Item>
        <NavLink className={styles.NavLink} to="/Home">
          Головна
        </NavLink>
      </Item>
      {isLogged ? (
        <Item>
          <NavLink className={styles.NavLink} to="/Phonebook">
            Книга
          </NavLink>
        </Item>
      ) : (
        ''
      )}
    </List>
  );
};
