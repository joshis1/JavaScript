import { useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import SystemStatus from "./SystemStatus";
import Address from "./Address";
import NetworkInfo from "./NetworkInfo";

import classes from "./SystemStyles.module.css";

import AlertDialog from "../AlertDialog";
import ErrorDialog from "../ErrorDialog";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`system-tabpanel-${index}`}
      aria-labelledby={`system-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

// TODO: lift
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// TODO: lift
function a11yProps(index) {
  return {
    id: `system-tab-${index}`,
    "aria-controls": `system-tabpanel-${index}`,
  };
}

const SystemSetup = () => {

  const unsavedDialogText = 'The current tab has unsaved changes, are you sure you would like to navigate away?'
  const errVal = { 'show': false, 'title': 'System Settings', 'text': "System failed" }

  const [tabIndex, setTabIndex] = useState(0);
  const [saveStatus, setSaveStatus] = useState(false);
  const [alertDialog, setAlertDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(errVal);
  const [navigate, setNavigate] = useState(0);

  const tabChangeHandler = (event, newTabIndex) => {
    if (saveStatus) {
      setAlertDialog(true);
      setNavigate(newTabIndex);
    }
    else {
      setTabIndex(newTabIndex);
    }
  };


  const saveStateModalHandler = (state) => {
    setSaveStatus(state);
  }

  const handleAlertDialogClose = (state) => {
    setAlertDialog(false);
    if (state) {
      //change the tab
      setSaveStatus(false);
      setTabIndex(navigate);
    }
  }

  const handleErrorDialogClose = () => {
    setErrorDialog(false);
  }


  // If failed to fetch the value then show this modal.
  const onErrorHandler = (props) => {
    setErrorDialog(true);
  }

  return (
    <div id="system-setup" className={classes.root}>
      <Box id="system-setup-button-container" className={classes.switchButtonContainer}>
      </Box>

      <Box id="system-setup-main-box">
        <AppBar
          id="system-setup-app-bar"
          position="static"
          style={{
            background: "white",
            marginLeft: "1.5rem",
            marginRight: "2rem",
            width: "auto",
          }}
        >
          <Tabs
            id="system-setup-tabs"
            value={tabIndex}
            onChange={tabChangeHandler}
            className={classes.tabPanel}
          >
            <Tab id="system-config-tab" className={classes.tab} label="System Information" {...a11yProps(0)} />
            <Tab id="system-suburb-tab" className={classes.tab} label="Address" {...a11yProps(1)} />
            <Tab id="system-network-tab" className={classes.tab} label="System Network Details" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel id="system-config-tab-panel" value={tabIndex} index={0}>
          <SystemStatus  onSaveState={saveStateModalHandler} err={onErrorHandler} id="system-config" />
        </TabPanel>
        <TabPanel id="system-suburb-tab-panel" value={tabIndex} index={1}>
          <Address onSaveState={saveStateModalHandler} id="system-suburb" />
        </TabPanel>

        <TabPanel id="system-network-tab-panel" value={tabIndex} index={2}>
          <NetworkInfo onSaveState={saveStateModalHandler} id="system-network-tab" />
        </TabPanel>

      </Box>

      <AlertDialog open={alertDialog} onclose={handleAlertDialogClose} title='Confirmation'
        text={unsavedDialogText} />

      <ErrorDialog open={errorDialog.show} onclose={handleErrorDialogClose} title={errorDialog.title}
        text={errorDialog.text} />


    </div >
  );
};

export default SystemSetup;
