import { Box } from '@mui/material';
import React from 'react';
import styles from './BookPage.module.css';

import book from '../assets/books/Deception Point - Dan Brown';

const BookPage = () => {
  return <pre className={styles.page}>{book.content}</pre>;
};

export default BookPage;
