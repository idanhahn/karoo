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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import styles from './[id].module.css';
import PlotStructureChart from '../../components/PlotStructureChart';
import prisma from '../../lib/prisma';

import manuscriptContent1 from '../../assets/sample_manuscripts/manuscript1';
import manuscriptContent2 from '../../assets/sample_manuscripts/manuscript2';
import TabSideNavItem from '../../components/TabSideNavItem';
import AnalysisTabContent from '../../components/AnalysisTabContent';
import PlotStructure from '../../components/PlotStructure';
import Beats from '../../components/Beats';
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

const tabs = [
  {
    id: 0,
    title: 'Plot Structure',
    icon: <TimelineIcon />,
  },
  {
    id: 1,
    title: 'Plot Beats',
    icon: <GraphicEqIcon />,
  },
  {
    id: 2,
    title: 'Pace',
    icon: <SpeedIcon />,
  },
  {
    id: 3,
    title: 'Narrative Vs Dialog',
    icon: <GraphicEqIcon />,
  },
  {
    id: 4,
    title: 'Emotion Classification',
    icon: <GraphicEqIcon />,
  },
  {
    id: 5,
    title: 'Characters',
    icon: <GroupsOutlinedIcon />,
  },
  {
    id: 6,
    title: 'Subjects',
    icon: <SubjectIcon />,
  },
  {
    id: 7,
    title: 'Explicit Content',
    icon: <PieChartOutlineIcon />,
  },
];

const Manuscript = ({
  manuscript,
  compareOptions,
}: {
  manuscript: any;
  compareOptions: any;
}) => {
  const [activeTab, setActiveTab] = useState<any>(0);

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
        {tabs.map((tab: any) => (
          <TabSideNavItem
            key={tab.id}
            id={tab.id}
            title={tab.title}
            icon={tab.icon}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </Box>
      <Box sx={{ mt: 3 }} className={styles.title}>
        <Box sx={{ ml: { xs: 5, lg: 20 } }} className={styles.manuscriptSelect}>
          <Typography className={styles.manuscriptName}>
            {manuscript.title}
          </Typography>
        </Box>
        <Box className={styles.compareSelect}>
          {compareOption ? (
            <Box sx={{ ml: 2 }} className={styles.compareClear}>
              <Typography color="secondary">Compare to</Typography>
              <Typography
                sx={{ ml: 2 }}
                className={styles.compareSelectedOption}
              >
                {compareOption.title}
              </Typography>
              <IconButton sx={{ color: 'red' }} onClick={handleClearCompare}>
                <ClearOutlinedIcon />
              </IconButton>
            </Box>
          ) : (
            <Button
              sx={{ ml: 2 }}
              variant="text"
              size="large"
              color="secondary"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClickCompare}
            >
              Compare
            </Button>
          )}
        </Box>
        <Box className={styles.right}></Box>
      </Box>

      <Box sx={{ mt: 6 }} className={styles.chartSection}>
        {/* {tabs.map((tab: any) => (
          <AnalysisTabContent
            id={tab.id}
            title={tab.title}
            activeTab={activeTab}
          >
            {tab.component(manuscript.id, compareOption)}
          </AnalysisTabContent>
        ))} */}
        {activeTab === 0 ? (
          <PlotStructure
            data={manuscript.analysis.plotStructure}
            compareTo={compareOptions}
            handleSliderChange={handleSliderChange}
          />
        ) : null}

        {activeTab === 1 ? (
          <Beats
            data={manuscriptAnalysis.beats}
            compareTo={compareOptions}
            handleSliderChange={handleSliderChange}
          />
        )}

        {/* <Typography className={styles.analysisName}>
          Plot Structure Analysis
        </Typography>
        <Box className={styles.graph}>
          <PlotStructureChart
            data={manuscript.analysis.beats}
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
        </Box> */}
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
  const bestSellerListObj = await prisma.bestSellerListAnalysis.findMany({
    where: {
      genre: manuscript.genre,
    },
  });

  const bestSellerListOptions = bestSellerListObj.map((obj) => {
    return {
      title: `${obj.name} - ${obj.genre}`,
      plotStructure: obj.plotStructure,
    };
  });

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
