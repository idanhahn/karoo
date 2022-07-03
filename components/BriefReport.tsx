import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Button, Divider, Typography } from '@mui/material';

import styles from './BriefReport.module.css';
import RadarChart from './RadarChart';

export interface BriefReportProps {
  book: any;
}

const BriefReport = ({ book }: { book: any }) => {
  const traits = [
    Number(book.analytics.valuationScore),
    Number(book.analytics.readabilityScore),
    Number(book.analytics.complexityScore),
    Number(book.analytics.paceScore),
    Number(book.analytics.trendingScore),
  ];

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
        <img className={styles.coverImg} src={book.cover} alt="" />
      </Box>
      <Box className={styles.title}>
        <Box className={styles.titleUpper}>
          <Box></Box>
          <Box className={styles.titleCenter}>
            <Typography className={styles.bookName}>{book.title}</Typography>
            <Typography className={styles.author}>
              by <span className={styles.authorName}>{book.author.name}</span>
            </Typography>
          </Box>
          <Box className={styles.titleRight}>
            <Typography className={styles.receiveDate}>
              May 5th, 2022
            </Typography>
            <Typography className={styles.score}>
              Score:{' '}
              <span className={styles.scoreNum}>
                {book.analytics.totalScore}
              </span>
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mt: 1 }} className={styles.divider} />
      </Box>

      <Box className={styles.content}>
        <Typography className={styles.genreTitle}>Genre</Typography>
        <Typography className={styles.genre}>{book.genre}</Typography>
        <Typography className={styles.representationTitle}>
          Representaion
        </Typography>
        <Typography className={styles.representation}>
          {book.author.agency.name}
        </Typography>
        <Typography className={styles.recommendationTitle}>
          Recommendation
        </Typography>
        <Typography className={styles.recommendation}>
          {book.analytics.recommendation}
        </Typography>
        <Typography className={styles.valuation}>
          Potential valuation:{' '}
          <span className={styles.valuationFigure}>
            {book.analytics.valuation}
          </span>
        </Typography>
      </Box>
      <Box className={styles.traits}>
        {/* <Typography className={styles.traitsTitle}>Traits Analysis</Typography> */}
        <Box className={styles.traitsChart}>
          <RadarChart traits={traits}></RadarChart>
        </Box>
      </Box>
      <Box className={styles.synopsis}>
        <Typography className={styles.synopsisTitle}>
          AI Generated Synopsis
        </Typography>
        <Typography className={styles.synopsisContent}>
          {book.analytics.synopsis}
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
