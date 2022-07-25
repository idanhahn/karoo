import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

import styles from './index.module.css';

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading || user) {
    if (user) {
      router.push('/upload');
    }
    return (
      <Box sx={{ mt: 30 }}>
        <Loader />
      </Box>
    );
  }

  return (
    <>
      {!user && (
        <Box className={styles.container}>
          <Box sx={{ mt: 4 }} className={styles.header}>
            Competition to publish the next{' '}
            <span className={styles.headerHighlight}>Bestseller</span> is hard
          </Box>
          <Box sx={{ mt: 2, pl: 50 }} className={styles.header}>
            We're adding the{' '}
            <span className={styles.headerHighlight}>Science</span>
          </Box>
          <Box sx={{ mt: 10 }} className={styles.content}>
            <Box sx={{ mr: 5 }} className={styles.leftSection}>
              <Link href="/api/auth/login">
                <Box id="login-box" className={styles.loginButton}>
                  <Typography className={styles.loginText}>Login</Typography>
                </Box>
              </Link>
              <Typography sx={{ mt: 5 }} className={styles.signupTitle}>
                Want to signup?
              </Typography>
              <Typography sx={{ mt: 2 }} className={styles.signupText}>
                At this time, we're only sharing access to a selected
                <br />
                group of authors and publishers.
              </Typography>
              <Typography sx={{ mt: 2 }} className={styles.signupText}>
                Click{' '}
                <a className={styles.linkHighlight} href="">
                  here
                </a>{' '}
                to register for our pre-release version.
              </Typography>
            </Box>
            <Box sx={{ ml: 5 }} className={styles.rightSection}>
              <img className={styles.image} src="/res/preview.jpg" alt="" />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
