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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

import styles from './[id].module.css';
import prisma from '../../lib/prisma';

import manuscriptContent1 from '../../assets/sample_manuscripts/manuscript1';
import manuscriptContent2 from '../../assets/sample_manuscripts/manuscript2';
import TabSideNavItem from '../../components/TabSideNavItem';
import PlotStructure from '../../components/analysisTabs/PlotStructure';
import Beats from '../../components/analysisTabs/Beats';
import Pace from '../../components/analysisTabs/Pace';
import ActionableMenuItem from '../../components/ActionableMenuItem';
import DialVsNarr from '../../components/analysisTabs/DialVsNarr';
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
    disabled: false,
  },
  {
    id: 1,
    title: 'Plot Beats',
    icon: <GraphicEqIcon />,
    disabled: false,
  },
  {
    id: 2,
    title: 'Pace',
    icon: <SpeedIcon />,
    disabled: false,
  },
  {
    id: 3,
    title: 'Narrative Vs Dialog',
    icon: <AlignVerticalBottomOutlinedIcon />,
    disabled: false,
  },
  {
    id: 4,
    title: 'Emotion Classification',
    icon: <EmojiEmotionsOutlinedIcon />,
    disabled: true,
  },
  {
    id: 5,
    title: 'Characters',
    icon: <GroupsOutlinedIcon />,
    disabled: true,
  },
  {
    id: 6,
    title: 'Subjects',
    icon: <SubjectIcon />,
    disabled: true,
  },
  {
    id: 7,
    title: 'Explicit Content',
    icon: <PieChartOutlineIcon />,
    disabled: true,
  },
];

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

const actionables = {
  plotStructureSuggestions: [
    {
      id: 0,
      category: 'plotStructureSuggestion',
      title: 'Formitable Conflict',
      description:
        'Most bestsellers throw a significant curve ball at their main protagonists in the last few chapters, usually around the 90% mark. Michael is having it too easy. Rechallenge him between chapters 22 to 25. Make it hurt.',
    },
    {
      id: 1,
      category: 'plotStructureSuggestion',
      title: 'Strong Opening',
      description:
        "Most bestsellers present the reader with a memorable experience in the first few pages, between the 0% - 5% marks. We've detected a first conflict resolution event around the 11% mark. Significant conflict resolution events early in the book will create interest in your readers; consider upping the stakes earlier in the book.",
    },
  ],
  characterSuggestions: [
    {
      id: 2,
      category: 'charactersSuggestion',
      title: 'Major Character Arc',
      description: `Your main female protagonist, Rachel, has an arc gap between 45% - 70% marks, Your readers haven't heard from her for a long time. Did you plan this?`,
    },
  ],
  emotionSuggestions: [
    {
      id: 3,
      category: 'emotionsSuggestion',
      title: 'Emotional Conflicts',
      description:
        'Most thrillers have an expected and changing distribution of fear, anger and courage. We noticed that as your plot developed through Chapters 12 to 18, Rachel exhibited noticeably higher levels of anger and very little fear. This may cause the reader to lose interest and stop empathizing with her. Think about changing the way she reacts to some of the challenges during this section of the book.',
    },
  ],
};

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

  const [anchorElActionables, setAnchorElActionables] =
    useState<null | HTMLElement>(null);

  const openActionables = Boolean(anchorElActionables);

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

  const handleClickActionable = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElActionables(event.currentTarget);
  };

  const handleCloseActionable = () => {
    setAnchorElActionables(null);
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
      if (pageRef.current.scrollTop !== null) {
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
            disabled={tab.disabled}
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
        <Divider sx={{ mt: 0, mb: 1 }} orientation="vertical" flexItem />
        <Box sx={{ ml: 2 }} className={styles.actionableSelect}>
          <Button
            variant="text"
            size="large"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleClickActionable}
          >
            4 Developmental Editing Recommendations
          </Button>
        </Box>
        <Box className={styles.right}></Box>
      </Box>

      <Box sx={{ mt: 6 }} className={styles.chartSection}>
        {activeTab === 0 ? (
          <PlotStructure
            data={manuscript.analysis.plotStructure}
            compareTo={compareOption}
          />
        ) : null}

        {activeTab === 1 ? (
          <Beats data={manuscript.analysis.beats} compareTo={compareOption} />
        ) : null}

        {activeTab === 2 ? (
          <Pace data={manuscript.analysis.pace} compareTo={compareOption} />
        ) : null}

        {activeTab === 3 ? (
          <DialVsNarr
            dialogues={manuscript.analysis.dialogues}
            narratives={manuscript.analysis.narratives}
            dialogue_per={manuscript.analysis.dialogue_per}
          />
        ) : null}

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

      {/* COMPARE MANU */}
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

      {/* ACTIONABLES MANU */}
      <Menu
        id="actionables-menu"
        anchorEl={anchorElActionables}
        keepMounted
        open={openActionables}
        onClose={handleCloseActionable}
      >
        <Box sx={{ ml: 2, mr: 2, mb: 1 }} className={styles.actionablesMenu}>
          <Box sx={{ ml: 2, mr: 2, mb: 1 }}>
            <Typography sx={{ ml: 2 }} color="secondary">
              Plot Structure Suggestions
            </Typography>
            {actionables.plotStructureSuggestions.map((actionable: any) => (
              <ActionableMenuItem key={actionable.id} actionable={actionable} />
            ))}
          </Box>
          <Divider />
          <Box sx={{ ml: 2, mr: 2, mb: 1 }}>
            <Typography sx={{ ml: 2 }} color="secondary">
              Characters Suggestions
            </Typography>
            {actionables.characterSuggestions.map((actionable: any) => (
              <Box key={actionable.id}>
                {actionable.id === 1 ? <Divider /> : null}
                <ActionableMenuItem actionable={actionable} />
              </Box>
            ))}
          </Box>
          <Divider />
          <Box sx={{ ml: 2, mr: 2, mb: 1 }}>
            <Typography sx={{ ml: 2 }} color="secondary">
              Emotion Structure Suggestions
            </Typography>
            {actionables.emotionSuggestions.map((actionable: any) => (
              <ActionableMenuItem key={actionable.id} actionable={actionable} />
            ))}
          </Box>
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
      beats: obj.analysis?.beats,
      plot: null,
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
      beats: obj.beats,
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
