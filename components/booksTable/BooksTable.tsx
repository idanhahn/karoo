import React, { useState } from 'react';
import {
  Button,
  Container,
  Fade,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import styles from './BooksTable.module.css';
import BriefReport from '../manuscriptsTable/BriefReport';

const score = 95;

const scoreStyle =
  score > 94 ? 'tableBody__scoreVeryHigh' : 'tableBody__scoreVeryLow';

const BooksTable = ({ books }: { books: any }) => {
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
                <TableCell className={styles.headerCell}>
                  Published Date
                </TableCell>
                <TableCell className={styles.headerCell}>Genre</TableCell>
                <TableCell className={styles.headerCell}>ISBN13</TableCell>
                <TableCell className={styles.headerCell}>Keywords</TableCell>
                <TableCell className={styles.headerCell}>Subjects</TableCell>
                <TableCell
                  className={styles.headerCell}
                  sx={{ minWidth: '80px' }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books &&
                books
                  .sort(
                    (a: any, b: any) => b.publicationDate - a.publicationDate
                  )
                  .map((book: any) => {
                    return (
                      <TableRow key={book.id}>
                        <TableCell className={styles.bodyTitle}>
                          {book.title}
                        </TableCell>
                        <TableCell className={styles.bodyAuthor}>
                          <span>{book.author}</span>
                          {/* <span>
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
                          </span> */}
                        </TableCell>
                        <TableCell className={`${styles.bodyScore}`}>
                          {book.publicationDate}
                        </TableCell>
                        <TableCell>{book.genre}</TableCell>
                        <TableCell>{book.isbn13}</TableCell>
                        <TableCell>{book.kewords}</TableCell>
                        <TableCell>{book.subjects}</TableCell>
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

export default BooksTable;
