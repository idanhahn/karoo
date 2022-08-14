import React from 'react';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../lib/prisma';
import { useForm } from 'react-hook-form';

import styles from './research.module.css';
import similarBooks from './api/similarBooks';
import BooksTable from '../components/booksTable/BooksTable';

const compareToOptions = [
  {
    value: 'nytbs',
    name: 'New York Times Best Sellers',
  },
  {
    value: 'amazon',
    name: 'Amazon Best Sellers',
  },
  {
    value: 'all',
    name: 'All',
  },
];

const Genre = [
  { value: 'scifi', name: 'Sci-fi' },
  { value: 'thriller', name: 'Thriller' },
  { value: 'fantasy', name: 'Fantasy' },
  { value: 'romance', name: 'Romance' },
  { value: 'youngAdults', name: 'Young Adults' },
  { value: 'horror', name: 'Horror' },
  { value: 'crime', name: 'Crime' },
  { value: 'all', name: 'All' },
];

const Research = ({ manuscript }: { manuscript: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      compareTo: `nytbs`,
      genre: 'all',
      fromYear: '2015',
      toYear: 'present',
      keywords: '',
    },
  });
  const onSubmit = async (data: any) => {
    const reqBody = {
      manuscriptId: manuscript.id,
      filterOptions: data,
    };

    const response = await fetch('/api/similarBooks', {
      method: 'POST',
      body: JSON.stringify(reqBody),
    });

    console.log(data);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.titleSection}>
        <Typography className={styles.title}>Deception Point</Typography>
      </Box>
      <Box className={styles.filterSection}>
        <Box className={styles.filterBox}>
          <Box sx={{ mt: 1, ml: 2 }}>
            <Box className={styles.suggestionSection}>
              <Typography className={styles.suggestion}>
                *Search similar books using{' '}
                <span className={styles.AiHighlight}>AI suggestions</span> or
                custome search using the below fields:
              </Typography>
            </Box>
            <Box sx={{ mt: 1 }} className={styles.searchSection}>
              <Box className={styles.row}>
                <Typography sx={{ fontWeight: 500 }}>Compare To</Typography>
                <FormControl size="small">
                  <Select
                    sx={{ ml: 1, minWidth: '270px' }}
                    defaultValue="nytbs"
                    required
                    {...register('compareTo', { required: true })}
                  >
                    {compareToOptions.map(({ value, name }) => (
                      <MenuItem key={value} value={value}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography sx={{ ml: 3, fontWeight: 500 }}>Genre</Typography>
                <FormControl size="small">
                  <Select
                    sx={{ ml: 1, minWidth: '150px' }}
                    defaultValue="scifi"
                    required
                    {...register('genre', { required: true })}
                  >
                    {Genre.map(({ value, name }) => (
                      <MenuItem key={value} value={value}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography sx={{ ml: 3, fontWeight: 500 }}>
                  From Year
                </Typography>
                <FormControl size="small">
                  <Select
                    sx={{ ml: 1, minWidth: '100px' }}
                    value="2019"
                    {...register('fromYear', { required: true })}
                  >
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2019">2019</MenuItem>
                    <MenuItem value="2018">2018</MenuItem>
                    <MenuItem value="2017">2017</MenuItem>
                    <MenuItem value="2016">2016</MenuItem>
                    <MenuItem value="2015">2015</MenuItem>
                    <MenuItem value="all">All</MenuItem>
                  </Select>
                </FormControl>
                <Typography sx={{ ml: 3, fontWeight: 500 }}>To Year</Typography>
                <FormControl size="small">
                  <Select
                    sx={{ ml: 1, mr: 3, minWidth: '100px' }}
                    value="present"
                    {...register('toYear', { required: true })}
                  >
                    <MenuItem value="present">Present</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2019">2019</MenuItem>
                    <MenuItem value="2018">2018</MenuItem>
                    <MenuItem value="2017">2017</MenuItem>
                    <MenuItem value="2016">2016</MenuItem>
                    <MenuItem value="2015">2015</MenuItem>
                    <MenuItem value="all">All</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ mb: 1 }} className={styles.row}>
                <Box className={styles.keywords}>
                  <Typography sx={{ fontWeight: 500 }}>Keywords</Typography>
                  <FormControl size="small">
                    <TextField
                      sx={{ ml: 6.5, minWidth: 550 }}
                      size="small"
                      {...register('keywords')}
                    />
                  </FormControl>
                </Box>
                <Button
                  sx={{ mr: 3, minWidth: 250 }}
                  className={styles.searchButton}
                  onClick={handleSubmit(onSubmit)}
                  variant="outlined"
                  size="small"
                >
                  Find Similar Books
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.table}>
        <BooksTable books={manuscript.similarBooks}></BooksTable>
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

export default Research;
