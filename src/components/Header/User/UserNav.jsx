import * as React from 'react';
import { List, Item } from './UserNav.module';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'components/API/API';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#d84831',
    },
  },
});

export const UserNav = () => {
  const { token, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <List>
        <Item>
          <div>Добро пожаловать, {user.name}!</div>
        </Item>
        <Item>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {
              dispatch(logoutUser(token));
            }}
          >
            Вийти
          </Button>
        </Item>
      </List>
    </ThemeProvider>
  );
};
