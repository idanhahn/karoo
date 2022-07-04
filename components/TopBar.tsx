import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopBar = () => {
  return (
    <AppBar position="sticky" className="appbar__appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            fontFamily="MONOSPACE"
            href=""
            sx={{ mr: 2 }}
            className="appbar__textLogo"
          >
            KAROO.AI
          </Typography>
          <Box>
            <Typography variant="h6" color="secondary" sx={{ mr: 5 }}>
              Sunny Day Printing
            </Typography>
          </Box>
          <Box>
            <AccountCircleIcon sx={{ mr: 10 }} fontSize="large" />
          </Box>
        </Toolbar>
      </Container>
      <style>{`
        .appbar__appbar{
          background-color: #ffffff;
        }
        .appbar__textLogo{
          display: flex;
          flex-grow: 1;
          color: #E27D60;
          font-weight: 700;
          letter-spacing: .3rem;
          text-decoration: none;
          text-shadow: 0px 2px 2px #AAAAAA;
          margin-left: 30px;
        }
      `}</style>
    </AppBar>
  );
};

export default TopBar;
