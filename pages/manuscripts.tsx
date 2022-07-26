import { Box, IconButton, Slider, Tooltip, Typography } from '@mui/material';
import React from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import SubjectIcon from '@mui/icons-material/Subject';

import styles from './manuscripts.module.css';
import PlotStructureChart from '../components/PlotStructureChart';
import BookPage from '../components/BookPage';

const Details = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.sidebar}>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Plot Structure" placement="right">
            <IconButton>
              <TimelineIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Plot Turns" placement="right">
            <IconButton>
              <GraphicEqIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Pace" placement="right">
            <IconButton>
              <SpeedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Characters" placement="right">
            <IconButton>
              <GroupsOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Subjects" placement="right">
            <IconButton>
              <PieChartOutlineIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Explicit Content" placement="right">
            <IconButton>
              <SubjectIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box className={styles.title}>
        <Typography className={styles.bookName}>The Martian</Typography>
      </Box>
      <Box sx={{ mt: 4 }} className={styles.chartSection}>
        <Typography className={styles.analysisName}>
          Plot Structure Analysis
        </Typography>
        <Box className={styles.graph}>
          <PlotStructureChart />
        </Box>
        <Box width={800}>
          <Slider
            sx={{
              color: 'black',
            }}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
      <Box sx={{ mt: 4, mr: 2, mb: 4 }} className={styles.book}>
        <Box className={styles.bookSection}>
          <Box className={styles.bookSearch}></Box>

          <Box className={styles.bookPage}>
            <BookPage />
          </Box>
        </Box>
      </Box>
      <Box className={styles.suggestions}>Some info</Box>
    </Box>
  );
};

export default Details;
