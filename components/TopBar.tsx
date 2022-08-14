import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './TopBar.module.css';

const pages = ['Manuscripts', 'Research', 'Publish'];

const TopBar = () => {
  const router = useRouter();
  const { user } = useUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" className="appbar__appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ ml: 3, mr: 2 }} className={styles.logo}>
            Karoo.ai
          </Box>

          {user && (
            <>
              <Box sx={{ ml: 12, mr: 3 }} className={styles.menu}>
                {pages.map((page, index) => (
                  <Link href={`/${page.toLowerCase()}`} key={index}>
                    <Box sx={{ mr: 5 }} className={styles.menuItem}>
                      {router.pathname === '/' + page.toLowerCase() ||
                      page
                        .toLowerCase()
                        .includes(router.pathname.split('/')[1]) ? (
                        <Typography variant="h5" className={styles.active}>
                          {page}
                        </Typography>
                      ) : (
                        <Typography variant="h5">{page}</Typography>
                      )}
                    </Box>
                  </Link>
                ))}
              </Box>
              <Box className={styles.spacer}></Box>
              <Box>
                <Typography
                  variant="h6"
                  color="secondary"
                  sx={{ mr: 1 }}
                  className={styles.userName}
                >
                  {user.name}
                </Typography>
              </Box>
              <Box onClick={handleMenu}>
                <AccountCircleIcon
                  sx={{ mr: 10, cursor: 'pointer' }}
                  fontSize="large"
                />
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link href="/profile">
            <Typography>Profile</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/api/auth/logout">
            <Typography>Logout</Typography>
          </Link>
        </MenuItem>
      </Menu>
      <style>{`
        .appbar__appbar{
          background-color: #ffffff;
        }
      `}</style>
    </AppBar>
  );
};

export default TopBar;
