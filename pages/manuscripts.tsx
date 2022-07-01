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

import styles from './manuscripts.module.css';

const score = 95;

const scoreStyle =
  score > 94 ? 'tableBody__scoreVeryHigh' : 'tableBody__scoreVeryLow';

const bookPreview = 'book preview here';

const manuscripts = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TableContainer>
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
            <TableRow>
              <TableCell className={styles.bodyTitle}>
                The Seer of the Isle
              </TableCell>
              <TableCell className={styles.bodyAuthor}>Enid Blyton</TableCell>
              <TableCell
                align="center"
                className={`${styles.bodyScore} ${scoreStyle}`}
              >
                {score}
              </TableCell>
              <TableCell>Crime</TableCell>
              <TableCell>$45,000</TableCell>
              <TableCell>Good</TableCell>
              <TableCell>Three Acts</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                  QUICK REPORT
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <BriefReport report={'string'} />
      </Modal>
    </>
  );
};

export default manuscripts;
