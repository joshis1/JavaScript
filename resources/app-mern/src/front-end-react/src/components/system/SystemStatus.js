import { React, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import classes from "./SystemStyles.module.css";

//use the base URL from the config file.
import {baseUrl} from "../config/config";

// fetch will get 
//  "cpu": 1,
//  "os": "windows"


export default function SystemStatus(SystemProps) {

  const [systemInfo, setSystemInfo] = useState({ 'cpu': 'undefined', 'os': 'undefined' });

  useEffect(() => {
    fetch(baseUrl+'/SystemStatus').then(response => response.json())
      .then(data => setSystemInfo(data))
      .catch(err => {
        console.log(err)
        SystemProps.err();
      }
      )
  }, [SystemProps]);

  return (
    <>
      <Card id="system-config-card">
        <CardContent id="system-config-card-content" className={classes.container}>

          <Typography
            component="h5"
            variant="h5"
            className={classes.title}
            gutterBottom
          >
            CPU Details
          </Typography>

          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs={6}>
              <Typography component="h4" className={classes.labelTitle}>
                CPU Information
              </Typography>
              <TextField
                id="system__cpu__usage"
                name="system__cpu__usage"
                value={systemInfo.cpu}
                variant="outlined"
                size="small"
                className={classes.text}
                InputProps={{ inputProps: { maxLength: 48, readOnly: true } }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography component="h4" className={classes.labelTitle}>
                Operating&nbsp;System
              </Typography>
              <TextField
                id="system__os__info"
                name="system__os__info"
                value={systemInfo.os}
                variant="outlined"
                type="Text"
                size="small"
                className={classes.text}
                InputProps={{ inputProps: { maxLength: 48, readOnly: true } }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
