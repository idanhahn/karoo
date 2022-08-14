import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

import styles from './TabSideNavItem.module.css';

const TabSideNavItem = ({
  id,
  title,
  activeTab,
  setActiveTab,
  icon,
  disabled,
}: {
  id: number;
  title: string;
  activeTab: number;
  setActiveTab: any;
  icon: any;
  disabled: boolean;
}) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <Box className={styles.sidebarItem}>
      <Tooltip title={title} placement="right">
        <Box>
          <IconButton
            className={activeTab === id ? 'active' : ''}
            onClick={handleClick}
            disabled={disabled}
          >
            {icon}
          </IconButton>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default TabSideNavItem;
