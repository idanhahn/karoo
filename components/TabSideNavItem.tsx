import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

import styles from './TabSideNavItem.module.css';

const TabSideNavItem = ({
  id,
  title,
  activeTab,
  setActiveTab,
  icon,
}: {
  id: number;
  title: string;
  activeTab: number;
  setActiveTab: any;
  icon: any;
}) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <Box className={styles.sidebarItem}>
      <Tooltip title={title} placement="right">
        <IconButton
          className={activeTab === id ? 'active' : ''}
          onClick={handleClick}
        >
          {icon}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TabSideNavItem;
