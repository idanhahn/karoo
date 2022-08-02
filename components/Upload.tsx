import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';

import styles from './Upload.module.css';
import Loader from './Loader';

const Upload = () => {
  const router = useRouter();
  const { user } = useUser();
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = async (e: any) => {
    console.log(e.target.files);
    setIsLoading(true);
    const files = [...e.target.files].map(
      (file: any) => file.name.split(' - ')[0]
    );
    const reqBody = {
      files: files,
      userEmail: user?.email,
    };

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify(reqBody),
    });
    if (await response.json()) {
      //setIsLoading(false);
      router.push('/manuscripts');
    }
  };

  const handleOnDragOver = (e: any) => {
    console.log('drag over');
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer) {
      const files = [...e.dataTransfer.files].map(
        (file: any) => file.name.split(' - ')[0]
      );
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify(files),
      });
      if (await response.json()) {
        //setIsLoading(false);
        router.push('/manuscripts');
      }
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ mt: 30 }} className={styles.container}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }} className={styles.container}>
      <Typography sx={{ mb: 1 }} className={styles.title}>
        Upload Manuscripts
      </Typography>
      <Typography sx={{ mb: 3 }} className={styles.subtitle}>
        Files should be PDF, EPUB, Mobi or TXT
      </Typography>
      <Box
        id="file-upload-box"
        sx={{ mb: 1 }}
        className={styles.dragNDropBox}
        onDragEnter={handleOnDragOver}
        onDragLeave={handleOnDragOver}
        onDragOver={handleOnDragOver}
        onDrop={handleDrop}
      >
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
          // multiple
          onChange={handleOnChange}
        />
      </Button>
    </Box>
  );
};

export default withPageAuthRequired(Upload, {
  returnTo: '/upload',
  onRedirecting: () => (
    <Box sx={{ mt: 30 }} className={styles.container}>
      <Loader />
    </Box>
  ),
  onError: (error) => <div>Error: {error.message}</div>,
});
