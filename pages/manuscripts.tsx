import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slider,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useRef } from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import SubjectIcon from '@mui/icons-material/Subject';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styles from './manuscripts.module.css';
import PlotStructureChart from '../components/PlotStructureChart';
import prisma from '../lib/prisma';

import bookContent from '../assets/books/sampleLong';
import bookContent1 from '../assets/books/book1';
import bookContent2 from '../assets/books/book2';
import bookContent3 from '../assets/books/book3';
import bookContent4 from '../assets/books/book4';
import bookContent5 from '../assets/books/book5';
import bookContent6 from '../assets/books/book6';
import bookContent7 from '../assets/books/book7';
import bookContent8 from '../assets/books/book8';
import bookContent9 from '../assets/books/book9';
import bookContent10 from '../assets/books/book10';
// import book from '../assets/books/sample';

const books: any = {
  1: bookContent1.content,
  2: bookContent2.content,
  3: bookContent3.content,
  4: bookContent4.content,
  5: bookContent5.content,
  6: bookContent6.content,
  7: bookContent7.content,
  8: bookContent8.content,
  9: bookContent9.content,
  10: bookContent10.content,
};

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
];

const Details = ({ book }: { book: any }) => {
  const bookRef = useRef<HTMLIFrameElement>(null);
  const pageRef = useRef<HTMLElement>(null);

  const getPagePosition = (scrollPosition: number) => {
    if (bookRef.current) {
      const maxScrollPosition: number = bookRef.current?.clientHeight;
      return Math.floor((scrollPosition * (maxScrollPosition - 1084)) / 100);
    }
  };

  const handleSliderChange = (e: any) => {
    if (pageRef.current) {
      if (pageRef.current.scrollTop) {
        pageRef.current.scrollTop = getPagePosition(e.target.value);
      }
    }
  };

  const handleSearchChange = (e: any) => {};

  const handleScroll = () => {
    // console.log(e.target.scrollTop);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.sidebar}>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Plot Structure" placement="right">
            <IconButton>
              <TimelineIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Plot Turns" placement="right">
            <IconButton>
              <GraphicEqIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Pace" placement="right">
            <IconButton>
              <SpeedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Characters" placement="right">
            <IconButton>
              <GroupsOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Subjects" placement="right">
            <IconButton>
              <PieChartOutlineIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Explicit Content" placement="right">
            <IconButton>
              <SubjectIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box className={styles.title}>
        <Typography className={styles.bookName}>
          {book.title} by{' '}
          <span className={styles.authorName}>{book.author.name}</span>
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }} className={styles.chartSection}>
        <Typography className={styles.analysisName}>
          Plot Structure Analysis
        </Typography>
        <Box className={styles.graph}>
          <PlotStructureChart plotData={book.analytics.plotStructure} />
        </Box>
        <Box sx={{ ml: 4 }} width={700}>
          <Slider
            sx={{
              color: '#41b3a3',
            }}
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleSliderChange}
            marks={marks}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 4, mr: 2, mb: 4 }} className={styles.book}>
        <Box className={styles.bookSection}>
          <Box className={styles.bookSearch}>
            <FormControl sx={{ m: 1 }} className={styles.search}>
              <InputLabel htmlFor="search">Search</InputLabel>
              <OutlinedInput
                id="search"
                onChange={handleSearchChange}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Search"
              />
            </FormControl>
          </Box>
          <Box ref={pageRef} onScroll={handleScroll} className={styles.page}>
            <pre ref={bookRef} className={styles.book}>
              {books[book.id]}
            </pre>
          </Box>
        </Box>
      </Box>
      <Box className={styles.suggestions}></Box>
    </Box>
  );
};

export async function getServerSideProps(params: any) {
  const bookObj = await prisma.book.findFirst({
    where: {
      id: +params.query.id,
    },
    include: {
      author: true,
      analytics: true,
    },
  });
  const book = JSON.parse(JSON.stringify(bookObj));
  return {
    props: { book },
  };
}

export default Details;
