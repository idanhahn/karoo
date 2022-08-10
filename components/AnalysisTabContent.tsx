import { Box } from '@mui/material';
import React from 'react';

import styles from './AnalysisTabContent.module.css';

const AnalysisTabContent = ({
  id,
  title,
  activeTab,
  children,
}: {
  id: number;
  title: string;
  activeTab: number;
  children: any;
}) => {
  return activeTab === id ? (
    <Box className={styles.tabContent}>
      <Box className={styles.title}>{title} Analysis</Box>
      {children}
    </Box>
  ) : null;
};

export default AnalysisTabContent;
