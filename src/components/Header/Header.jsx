import { HeaderSection, Container } from './Header.module';
import { AuthNav } from './Auth/AuthNav';
import { UserNav } from './User/UserNav';
import { PageNav } from './PageNav/PageNav';
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';

export function Header() {
  const { token } = useSelector(state => state.auth);

  return (
    <HeaderSection>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={styles.AppBar}>
            <Toolbar>
              <PageNav></PageNav>
              <Typography sx={{ flexGrow: 1 }}></Typography>
              {!token ? <AuthNav></AuthNav> : <UserNav></UserNav>}
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </HeaderSection>
  );
}
