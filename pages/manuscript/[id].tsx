import {
  Box,
  Button,
  Divider,
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
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import styles from './[id].module.css';
import PlotStructureChart from '../../components/PlotStructureChart';
import prisma from '../../lib/prisma';

import manuscriptContent1 from '../../assets/sample_manuscripts/manuscript1';
import manuscriptContent2 from '../../assets/sample_manuscripts/manuscript2';
// import manuscriptContent3 from '../../assets/sample_manuscripts/manuscript3';
// import manuscriptContent4 from '../../assets/sample_manuscripts/manuscript4';
// import manuscriptContent5 from '../../assets/sample_manuscripts/manuscript5';
// import manuscriptContent6 from '../../assets/sample_manuscripts/manuscript6';
// import manuscriptContent7 from '../../assets/sample_manuscripts/manuscript7';
// import manuscriptContent8 from '../../assets/sample_manuscripts/manuscript8';
// import manuscriptContent9 from '../../assets/sample_manuscripts/manuscript9';
// import manuscriptContent10 from '../../assets/sample_manuscripts/manuscript10';

const manuscripts: any = {
  1: manuscriptContent1.content,
  2: manuscriptContent2.content,
  // 3: manuscriptContent3.content,
  // 4: manuscriptContent4.content,
  // 5: manuscriptContent5.content,
  // 6: manuscriptContent6.content,
  // 7: manuscriptContent7.content,
  // 8: manuscriptContent8.content,
  // 9: manuscriptContent9.content,
  // 10: manuscriptContent10.content,
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

const Manuscript = ({
  manuscript,
  compareOptions,
}: {
  manuscript: any;
  compareOptions: any;
}) => {
  const [compareOption, setCompareOption] = useState<any>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const open = Boolean(anchorEl);

  const handleClickCompare = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (compareOption: any) => {
    //setSelectedIndex(index);
    setCompareOption(compareOption);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearCompare = () => {
    setCompareOption(null);
  };

  const manuscriptRef = useRef<any>(null);
  const pageRef = useRef<null | HTMLElement>(null);

  const getPagePosition: any = (scrollPosition: number) => {
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

  const handleCompareSearchChange = (e: any) => {};

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
      <Box sx={{ mt: 3 }} className={styles.title}>
        <Box className={styles.compareSelect}>
          {compareOption ? (
            <Box sx={{ ml: { xs: 5, ml: 20 } }} className={styles.compareClear}>
              <Typography className={styles.compareSelectedOption}>
                {compareOption.title}
              </Typography>
              <IconButton sx={{ color: 'red' }} onClick={handleClearCompare}>
                <ClearOutlinedIcon />
              </IconButton>
            </Box>
          ) : (
            <Button
              sx={{ ml: { xs: 5, xl: 20 }, color: '#000', borderColor: '#000' }}
              variant="outlined"
              size="large"
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={handleClickCompare}
            >
              Compare
            </Button>
          )}
        </Box>
        <Box className={styles.manuscriptSelect}>
          <Typography className={styles.manuscriptName}>
            {manuscript.title}
          </Typography>
        </Box>
        <Box className={styles.right}></Box>
      </Box>
      <Box sx={{ mt: 6 }} className={styles.chartSection}>
        <Typography className={styles.analysisName}>
          Plot Structure Analysis
        </Typography>
        <Box className={styles.graph}>
          <PlotStructureChart
            plotData={manuscript.analysis.plotStructure}
            compareOption={compareOption}
          />
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
      <Box sx={{ mt: 6, mr: 2, mb: 4 }} className={styles.manuscript}>
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
        <Box sx={{ ml: 2, mr: 2, mb: 1 }} className={styles.compareSearch}>
          <FormControl sx={{ m: 1 }} className={styles.search}>
            <OutlinedInput
              id="compare-search"
              onChange={handleCompareSearchChange}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <SearchOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
              size="small"
            />
          </FormControl>
        </Box>
        <Box sx={{ ml: 2, mr: 2, mb: 1 }}>
          <Typography sx={{ ml: 2 }} color="secondary">
            Best Seller List
          </Typography>
          {compareOptions.bestSellerList.map((option: any) => (
            <MenuItem
              key={option.title}
              onClick={(event) => handleMenuItemClick(option)}
            >
              {option.title}
            </MenuItem>
          ))}
        </Box>
        <Divider />
        <Box sx={{ ml: 2, mr: 2, mb: 1 }}>
          <Typography sx={{ ml: 2 }} color="secondary">
            Similar Books
          </Typography>
          {compareOptions.similarBooksList.map((option: any) => (
            <MenuItem
              key={option.title}
              onClick={() => handleMenuItemClick(option)}
            >
              {option.title} by {option.author}
            </MenuItem>
          ))}
        </Box>
        <Divider />
        <Box sx={{ ml: 2, mr: 2, mb: 1 }}>
          <Typography sx={{ ml: 2 }} color="secondary">
            Archtypes
          </Typography>
          {compareOptions.archtypeList.map((option: any) => (
            <MenuItem
              key={option.title}
              onClick={() => handleMenuItemClick(option)}
            >
              {option.title}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};

export async function getServerSideProps(params: any) {
  // get the manuscript
  const manuscriptObj = await prisma.manuscript.findFirst({
    where: {
      id: +params['query']['id'],
    },
    include: {
      analysis: true,
      similarBooks: {
        include: {
          analysis: true,
        },
      },
    },
  });

  const manuscript = JSON.parse(JSON.stringify(manuscriptObj));

  const similarBooksObj = manuscriptObj?.similarBooks;
  const similarBooksOptions = similarBooksObj?.map((obj) => {
    return {
      title: obj.title,
      author: obj.author,
      plotStructure: obj.analysis?.plotStructure,
    };
  });
  const similarBooksList = JSON.parse(JSON.stringify(similarBooksOptions));

  // according to the manuscript, get best seller compare options
  // const bestSellerListObj = await prisma.bestSellerListAnalysis.findUnique({
  //   where: {
  //     genre: manuscript.genre,
  //   },
  // });

  // const bestSellerListOptions = bestSellerListObj.map((obj) => {
  //   return {
  //     title: `${obj.name} - ${obj.genre}`,
  //     plotStructure: obj.plotStructure,
  //   };
  // });

  const bestSellerListOptions = [];
  if (manuscript.genre === 'Thriller') {
    bestSellerListOptions.push({
      title: 'New York Bestsellers - Thriller',
      plotStructure: [
        8, 4, -2, -8, -16, -23, -30, -35, -40, -42, -43, -41, -38, -33, -26,
        -19, -12, -5, 2, 8, 11, 15, 16, 15, 13, 10, 6, 2, -2, -5, -7, -9, -9,
        -8, -5, -1, 3, 7, 12, 17, 23, 27, 31, 34, 35, 35, 34, 32, 30, 27, 25,
        22, 20, 18, 16, 15, 14, 14, 14, 15, 16, 16, 17, 17, 18, 18, 19, 18, 18,
        18, 17, 16, 14, 13, 12, 10, 8, 6, 4, 2, 0, -1, -3, -5, -5, -5, -4, -2,
        0, 2, 6, 10, 14, 18, 22, 26, 29, 32, 34, 35,
      ],
    });
  } else {
    bestSellerListOptions.push({
      title: 'New York Bestsellers - Sci-fi',
      plotStructure: [
        8, 10, 13, 17, 21, 26, 31, 35, 37, 39, 38, 37, 34, 30, 26, 21, 17, 13,
        9, 7, 6, 6, 6, 7, 8, 9, 9, 10, 9, 9, 8, 7, 6, 6, 5, 6, 7, 9, 11, 14, 16,
        18, 19, 19, 18, 16, 11, 5, -2, -9, -17, -25, -31, -36, -40, -43, -43,
        -42, -39, -36, -32, -28, -24, -20, -18, -18, -19, -20, -23, -26, -30,
        -33, -36, -38, -39, -39, -39, -39, -38, -37, -36, -36, -36, -36, -37,
        -38, -39, -39, -38, -37, -35, -30, -24, -17, -9, -1, 6, 12, 17, 21,
      ],
    });
  }

  const bestSellerList = JSON.parse(JSON.stringify(bestSellerListOptions));

  // get all archtypes
  const archtypeListObj = await prisma.archtypeAnalysis.findMany({});
  const archtypeListOptions = archtypeListObj.map((obj) => {
    return {
      title: obj.class,
      plotStructure: obj.plotStructure,
    };
  });

  const archtypeList = JSON.parse(JSON.stringify(archtypeListOptions));

  const compareOptions = {
    bestSellerList: bestSellerList,
    archtypeList: archtypeList,
    similarBooksList: similarBooksList,
  };

  return {
    props: { manuscript, compareOptions },
  };
}

export default Manuscript;
