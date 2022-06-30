import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Button, Divider, Typography } from '@mui/material';

import styles from './BriefReport.module.css';

export interface BriefReportProps {
  report: string;
}

const BriefReport = (props: BriefReportProps) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.image}>
        {/* <Image
              className={styles.coverImg}
              src="/res/the-martian.jpg"
              layout="fill"
              objectFit="contain"
            /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.coverImg} src="/res/the-martian.jpg" alt="" />
      </Box>
      <Box className={styles.title}>
        <Box className={styles.titleUpper}>
          <Box></Box>
          <Box className={styles.titleCenter}>
            <Typography className={styles.bookName}>The Martian</Typography>
            <Typography className={styles.author}>
              by <span className={styles.authorName}>Andy Weir</span>
            </Typography>
          </Box>
          <Box className={styles.titleRight}>
            <Typography className={styles.receiveDate}>
              May 5th, 2022
            </Typography>
            <Typography className={styles.score}>
              Score: <span className={styles.scoreNum}>95</span>
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mt: 1 }} className={styles.divider} />
      </Box>

      <Box className={styles.content}>
        <Typography className={styles.genreTitle}>Genre</Typography>
        <Typography className={styles.genre}>Sci-fi</Typography>
        <Typography className={styles.representationTitle}>
          Representaion
        </Typography>
        <Typography className={styles.representation}>
          The Book Group
        </Typography>
        <Typography className={styles.recommendationTitle}>
          Recommendation
        </Typography>
        <Typography className={styles.recommendation}>
          Accept at market standard
        </Typography>
        <Typography className={styles.valuation}>
          Potential valuation:{' '}
          <span className={styles.valuationFigure}>$60,000</span>
        </Typography>
      </Box>
      <Box className={styles.traits}></Box>
      <Box className={styles.synopsis}>
        <Typography className={styles.synopsisTitle}>
          AI Generated Synopsis
        </Typography>
        <Typography className={styles.synopsisContent}>
          Mark Watney became one of the first people to walk on Mars six days
          ago. After a dust storm nearly kills him and forces his crew to
          evacuate while thinking him dead, Mark finds himself stranded and
          completely alone with no way to even signal Earth.
        </Typography>
      </Box>
      <Box className={styles.actions}>
        <Button
          className={styles.actionButton}
          sx={{ mr: 3 }}
          variant="outlined"
          color="primary"
          onClick={() => console.log('clicked compare')}
        >
          Compare
        </Button>
        <Button
          className={styles.actionButton}
          variant="outlined"
          color="secondary"
          onClick={() => console.log('clicked more detailed')}
        >
          More Details
        </Button>
      </Box>
    </Box>
  );
};

export default BriefReport;
