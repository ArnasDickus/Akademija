import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from 'components/ui/search-bar/search-bar.component';
import CourseOverview from 'components/course-overview/course-overview';
import CourseQuestionsAnswers from 'components/course-q&a/courseQ&A';
// import AllRoutesEnum from 'core/enums/allRoutes.enum';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Carousel: React.FC = () => {
  const [value, setValue] = useState(0);
  // const location = useLocation();
  // const history = useHistory();

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const matchTabToHash = () => {
    // if (location.hash === AllRoutesEnum.SEARCHHASH) {
    //   setValue(0);
    // } else if (location.hash === AllRoutesEnum.OVERVIEWHASH) {
    //   setValue(1);
    // } else if (location.hash === AllRoutesEnum.QAHASH) {
    //   setValue(2);
    // } else if (location.hash === '') {
    //   // history.push({ hash: AllRoutesEnum.OVERVIEWHASH });
    //   setValue(1);
    // }
  };

  useEffect(() => {
    matchTabToHash();
  }, []);

  return (
    <div>
      <Paper>
        <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange}>
          <Tab
            label={<FontAwesomeIcon icon={faSearch} />}
            // onClick={() => history.push({ hash: AllRoutesEnum.SEARCHHASH })}
            {...a11yProps(0)}
          />
          <Tab
            label="Overview"
            // onClick={() => history.push({ hash: AllRoutesEnum.OVERVIEWHASH })}
            {...a11yProps(1)}
          />
          <Tab
            label="Q&A"
            // onClick={() => history.push({ hash: AllRoutesEnum.QAHASH })}
            {...a11yProps(2)}
          />
        </Tabs>
      </Paper>
      <TabPanel index={0} value={value}>
        <SearchBar />
      </TabPanel>

      <TabPanel index={1} value={value}>
        <CourseOverview />
      </TabPanel>

      <TabPanel index={2} value={value}>
        <CourseQuestionsAnswers />
      </TabPanel>
    </div>
  );
};

export default Carousel;
