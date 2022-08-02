import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Slider,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import SubjectIcon from '@mui/icons-material/Subject';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import styles from './[id].module.css';
import PlotStructureChart from '../../components/PlotStructureChart';
import prisma from '../../lib/prisma';

import manuscriptContent from '../../assets/sample_manuscripts/sampleLong';
import manuscriptContent1 from '../../assets/sample_manuscripts/manuscript1';
import manuscriptContent2 from '../../assets/sample_manuscripts/manuscript2';
import manuscriptContent3 from '../../assets/sample_manuscripts/manuscript3';
import manuscriptContent4 from '../../assets/sample_manuscripts/manuscript4';
import manuscriptContent5 from '../../assets/sample_manuscripts/manuscript5';
import manuscriptContent6 from '../../assets/sample_manuscripts/manuscript6';
import manuscriptContent7 from '../../assets/sample_manuscripts/manuscript7';
import manuscriptContent8 from '../../assets/sample_manuscripts/manuscript8';
import manuscriptContent9 from '../../assets/sample_manuscripts/manuscript9';
import manuscriptContent10 from '../../assets/sample_manuscripts/manuscript10';
// import manuscript from '../assets/manuscripts/sample';

const manuscripts: any = {
  1: manuscriptContent1.content,
  2: manuscriptContent2.content,
  3: manuscriptContent3.content,
  4: manuscriptContent4.content,
  5: manuscriptContent5.content,
  6: manuscriptContent6.content,
  7: manuscriptContent7.content,
  8: manuscriptContent8.content,
  9: manuscriptContent9.content,
  10: manuscriptContent10.content,
};

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
];

const compareOptions = ['Book 1', 'Book 2', 'Book 3'];

const Manuscript = ({ manuscript }: { manuscript: any }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const open = Boolean(anchorEl);

  const handleClickCompare = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const manuscriptRef = useRef<HTMLIFrameElement>(null);
  const pageRef = useRef<HTMLElement>(null);

  const getPagePosition = (scrollPosition: number) => {
    if (manuscriptRef.current) {
      const maxScrollPosition: number = manuscriptRef.current?.clientHeight;
      return Math.floor((scrollPosition * (maxScrollPosition - 1084)) / 100);
    }
  };

  const handleSliderChange = (e: any) => {
    if (pageRef.current) {
      if (pageRef.current.scrollTop) {
        pageRef.current.scrollTop = getPagePosition(e.target.value);
      }
    }
  };

  const handleSearchChange = (e: any) => {};

  const handleScroll = () => {
    // console.log(e.target.scrollTop);
  };

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
        <Box className={styles.compareSelect}>
          <Button
            sx={{ ml: 5, color: '#000', borderColor: '#000' }}
            variant="outlined"
            size="large"
            startIcon={<AddCircleOutlineOutlinedIcon />}
            onClick={handleClickCompare}
          >
            Compare
          </Button>
        </Box>
        <Box className={styles.manuscriptSelect}>
          <Typography className={styles.manuscriptName}>
            {manuscript.title}
          </Typography>
        </Box>
        <Box className={styles.right}></Box>
      </Box>
      <Box sx={{ mt: 4 }} className={styles.chartSection}>
        <Typography className={styles.analysisName}>
          Plot Structure Analysis
        </Typography>
        <Box className={styles.graph}>
          <PlotStructureChart plotData={manuscript.analysis.plotStructure} />
        </Box>
        <Box sx={{ ml: 4 }} width={700}>
          <Slider
            sx={{
              color: '#41b3a3',
            }}
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleSliderChange}
            marks={marks}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 4, mr: 2, mb: 4 }} className={styles.manuscript}>
        <Box className={styles.manuscriptSection}>
          <Box className={styles.manuscriptSearch}>
            <FormControl sx={{ m: 1 }} className={styles.search}>
              <InputLabel htmlFor="search">Search</InputLabel>
              <OutlinedInput
                id="search"
                onChange={handleSearchChange}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Search"
              />
            </FormControl>
          </Box>
          <Box ref={pageRef} onScroll={handleScroll} className={styles.page}>
            <pre ref={manuscriptRef} className={styles.manuscript}>
              {manuscripts[manuscript.internalTextId]}
            </pre>
          </Box>
        </Box>
      </Box>
      <Box className={styles.suggestions}></Box>

      <Menu
        id="compare-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {compareOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export async function getServerSideProps(params: any) {
  const manuscriptObj = await prisma.manuscript.findFirst({
    where: {
      id: +params['query']['id'],
    },
    include: {
      analysis: true,
    },
  });
  const manuscript = JSON.parse(JSON.stringify(manuscriptObj));
  return {
    props: { manuscript },
  };
}

export default Manuscript;
