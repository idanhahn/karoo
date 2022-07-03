import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import styles from './upload.module.css';

import prisma from '../lib/prisma';

const updateBook = async function (title: string) {
  const updateBook = await prisma.book.update({
    where: {
      title: {
        equals: title,
      },
    },
    data: {
      uploaded: true,
    },
  });
};

const upload = () => {
  const handleOnChange = async (e: any) => {
    console.log(e.target.files);
    const files = [...e.target.files].map(
      (file: any) => file.name.split(' - ')[0]
    );

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify(files),
    });
  };

  return (
    <Box className={styles.container}>
      <Typography sx={{ mb: 1 }} className={styles.title}>
        Upload Manuscripts
      </Typography>
      <Typography sx={{ mb: 3 }} className={styles.subtitle}>
        Files should be PDF, EPUB, Mobi or TXT
      </Typography>
      <Box sx={{ mb: 1 }} className={styles.dragNDropBox}>
        <Box className={styles.dragNDrop}>
          <Box className={styles.dragNDropImgContainer}>
            <img
              className={styles.dragNDropImage}
              src="/res/upload.svg"
              alt=""
            />
          </Box>
          <Typography className={styles.dragNDropText}>
            Drag & Drop your files here
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ mb: 1 }} className={styles.subtitle}>
        Or
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        component="label"
        className={styles.button}
      >
        Upload Files
        <input
          accept=".doc, docx, .pdf, .epub, .mobi, .txt"
          type="file"
          hidden
          multiple
          onChange={handleOnChange}
        />
      </Button>
    </Box>
  );
};

export default upload;
