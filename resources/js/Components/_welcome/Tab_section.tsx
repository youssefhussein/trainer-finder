import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            // className="bg-slate-300"
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 3,
                bgcolor: "primary.main",
                display: "flex",
                // height: 224, default
                height: 290,
            }}
        >
            <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab
                    label="Body-Building"
                    {...a11yProps(0)}
                    className="text-white"
                />
                <Tab label="Swimming" {...a11yProps(1)} />
                <Tab label="Yoga" {...a11yProps(2)} />
                <Tab label="Football" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <img
                    src="/imgs/dumbell.jpg"
                    alt="img"
                    className="max-h-80 max-w-80"
                />
                <h3 className="items-center font-semibold text-orange-500">
                    We are the coolest no cap
                </h3>
                <p className="text-slate-800"> some cool af description</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <img
                    src="/imgs/swimming.jpg"
                    alt="img"
                    className="max-h-80 max-w-80"
                />
                <h3 className="items-center font-semibold text-orange-500">
                    We are the coolest no cap
                </h3>
                <p className="text-slate-800"> some cool af description</p>{" "}
            </TabPanel>
            <TabPanel value={value} index={2}>
                <img
                    src="/imgs/yogaa.jpg"
                    alt="img"
                    className="max-h-80 max-w-80"
                />
                <h3 className="items-center font-semibold text-orange-500">
                    We are the coolest no cap
                </h3>
                <p className="text-slate-800"> some cool af description</p>{" "}
            </TabPanel>
            <TabPanel value={value} index={3}>
                <img
                    src="/imgs/football-premium.jpg"
                    alt="img"
                    className="max-h-80 max-w-80"
                />
                <h3 className="items-center font-semibold text-orange-500">
                    We are the coolest no cap
                </h3>
                <p className="text-slate-800"> some cool af description</p>{" "}
            </TabPanel>
            <TabPanel value={value} index={4}>
                <img
                    src="/imgs/powder.jpg"
                    alt="img"
                    className="max-h-80 max-w-80"
                />
                <h3 className="items-center font-semibold text-orange-500">
                    We are the coolest no cap
                </h3>
                <p className="text-slate-800"> some cool af description</p>{" "}
            </TabPanel>
        </Box>
    );
}
