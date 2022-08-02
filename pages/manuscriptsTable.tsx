import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import BriefReport from '../components/BriefReport';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import styles from './manuscriptsTable.module.css';
import prisma from '../lib/prisma';
import { Container, Fade } from '@mui/material';

const score = 95;

const scoreStyle =
  score > 94 ? 'tableBody__scoreVeryHigh' : 'tableBody__scoreVeryLow';

const bookPreview = 'book preview here';

const Manuscripts = ({ books }: { books: any }) => {
  const [open, setOpen] = useState(false);
  const [bookPreview, setBookPreview] = useState(null);

  const handleClickOpen = (book: any) => {
    setBookPreview(book);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ mt: 5 }}>
      <TableContainer>
        <Fade timeout={1000} in={true}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow className={styles.header}>
                <TableCell
                  className={`${styles.headerTitle} ${styles.headerCell}`}
                >
                  Title
                </TableCell>
                <TableCell className={styles.headerCell}>Author Name</TableCell>
                <TableCell align="center" className={styles.headerCell}>
                  AI Score
                </TableCell>
                <TableCell className={styles.headerCell}>Genre</TableCell>
                <TableCell className={styles.headerCell}>Valuation</TableCell>
                <TableCell className={styles.headerCell}>Readability</TableCell>
                <TableCell className={styles.headerCell}>Structure</TableCell>
                <TableCell
                  className={styles.headerCell}
                  sx={{ minWidth: '80px' }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books &&
                books
                  .filter((book: any) => book.uploaded)
                  .sort(
                    (a: any, b: any) =>
                      b.analytics.totalScore - a.analytics.totalScore
                  )
                  .map((book: any) => {
                    return (
                      <TableRow key={book.id}>
                        <TableCell className={styles.bodyTitle}>
                          {book.title}
                        </TableCell>
                        <TableCell className={styles.bodyAuthor}>
                          <span>{book.author.name}</span>
                          <span>
                            {book.author.trending > 0 && (
                              <TrendingUpIcon
                                sx={{ ml: 1, color: '#22BB33' }}
                              />
                            )}
                          </span>
                          <span>
                            {book.author.trending < 0 && (
                              <TrendingDownIcon
                                sx={{ ml: 1, color: '#BB2124' }}
                              />
                            )}
                          </span>
                        </TableCell>
                        <TableCell
                          align="center"
                          className={`${styles.bodyScore} ${scoreStyle}`}
                        >
                          {book.analytics.totalScore}
                        </TableCell>
                        <TableCell>{book.genre}</TableCell>
                        <TableCell>{book.analytics.valuation}</TableCell>
                        <TableCell>{book.analytics.readability}</TableCell>
                        <TableCell>{book.analytics.structure}</TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                              handleClickOpen(book);
                            }}
                          >
                            QUICK REPORT
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </Fade>
        <Modal open={open} onClose={handleClose}>
          <BriefReport book={bookPreview} />
        </Modal>
      </TableContainer>
    </Container>
  );
};

export async function getServerSideProps() {
  // const booksObj = await prisma.book.findMany({
  //   include: {
  //     author: {
  //       include: {
  //         agency: true,
  //       },
  //     },
  //     analytics: true,
  //   },
  // });
  // const books = JSON.parse(JSON.stringify(booksObj));
  const books = {};
  return { props: { books } };
}

export default Manuscripts;
