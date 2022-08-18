import { MenuItem, Box, Divider, Typography } from '@mui/material';
import React from 'react';
import CharactersIcon from '../assets/icons/CharatersIcon';
import PlotStructueIcon from '../assets/icons/PlotStructureIcon';
import EmotionsIcon from '../assets/icons/EmotionsIcon';

import styles from './ActionableMenuItem.module.css';

const ActionableMenuItem = ({ actionable }: { actionable: any }) => {
  const handleMenuItemClick = () => {
    console.log('Menu item clicked');
  };

  return (
    <MenuItem onClick={handleMenuItemClick}>
      <Box className={styles.container}>
        <Box className={styles.actionable}>
          {actionable.category === 'plotStructureSuggestion' ? (
            <PlotStructueIcon className={styles.icon} />
          ) : null}
          {actionable.category === 'charactersSuggestion' ? (
            <CharactersIcon className={styles.icon} />
          ) : null}
          {actionable.category === 'emotionsSuggestion' ? (
            <EmotionsIcon className={styles.icon} />
          ) : null}

          <Box sx={{ ml: 3 }} className={styles.content}>
            <Typography className={styles.title}>{actionable.title}</Typography>
            <Typography sx={{ mt: 1 }} className={styles.description}>
              {actionable.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </MenuItem>
  );
};

export default ActionableMenuItem;
