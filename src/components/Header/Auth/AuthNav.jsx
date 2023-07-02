import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Item } from './AuthNav.module';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <List>
      <Item>
        <NavLink className={styles.NavLink} to="/SignUp">
          Зареєструватись
        </NavLink>
      </Item>
      <Item>
        <NavLink className={styles.NavLink} to="/SignIn">
          Увійти
        </NavLink>
      </Item>
    </List>
  );
};
