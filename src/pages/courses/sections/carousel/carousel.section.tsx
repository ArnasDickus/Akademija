import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from "components/ui/search-bar/search-bar.component";
import CourseOverview from "components/course-overview/course-overview";
import CourseQuestionsAnswers from "components/course-q&a/courseQ&A";

type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
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

    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Paper>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    value={value}
                    onChange={handleChange}>

                    <Tab label={<FontAwesomeIcon icon={faSearch} />} {...a11yProps(0)} />
                    <Tab label="Overview" {...a11yProps(1)} />
                    <Tab label="Q&A" {...a11yProps(2)} />
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
    )
}

export default Carousel;
