import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../lib/prisma';

import PublishIcon from '../assets/icons/PublishIcon';
import styles from './publish.module.css';
import KeywordsIcon from '../assets/icons/KeywordsIcon';
import CoverPageIcon from '../assets/icons/CoverPageIcon';
import TrendsAnalysisIcon from '../assets/icons/TrendsAnalysisIcon';
import FinanceIcon from '../assets/icons/FinanceIcon';
import SelfPublishIcon from '../assets/icons/SelfPublishIcon';

const cards = [
  {
    name: 'Publishers',
    description: 'Find and Query Publishers',
    icon: <PublishIcon className={styles.icon} />,
  },
  {
    name: 'Keywords',
    description: 'AI Suggested Keywords',
    icon: <KeywordsIcon className={styles.icon} />,
  },
  {
    name: 'Cover Page',
    description: 'Cover Page Analysis',
    icon: <CoverPageIcon className={styles.icon} />,
  },
  {
    name: 'Trends Analysis',
    description: 'Track Industry Trends',
    icon: <TrendsAnalysisIcon className={styles.icon} />,
  },
  {
    name: 'Finance',
    description: 'Grow with Embedded Finance',
    icon: <FinanceIcon className={styles.icon} />,
  },
  {
    name: 'Self Publish',
    description: 'Self Publish Your Manuscript',
    icon: <SelfPublishIcon className={styles.icon} />,
  },
];

const Publish = ({ manuscript }: { manuscript: any }) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.titleSection}>
        <Typography className={styles.title}>{manuscript.title}</Typography>
      </Box>
      <Box className={styles.actionsSection}>
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.name}>
              <Box className={styles.card}>
                <Box className={styles.cardIcon}>{card.icon}</Box>
                <Box className={styles.cardName}>
                  <Typography className={styles.name}>{card.name}</Typography>
                </Box>
                <Box className={styles.cardDescription}>
                  <Typography className={styles.description}>
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export async function getServerSideProps({ req, res, params }: any) {
  // get manuscript id according to user active manuscript
  const session = await getSession(req, res);
  const email = session?.user?.email;

  const userObj = await prisma.user.findFirst({
    where: {
      email,
    },
    include: {
      manuscripts: {
        where: {
          active: true,
        },
        include: {
          analysis: true,
          similarBooks: {
            include: {
              analysis: true,
            },
          },
        },
      },
    },
  });

  const manuscript = JSON.parse(JSON.stringify(userObj?.manuscripts[0]));

  return {
    props: { manuscript },
  };
}
export default Publish;
