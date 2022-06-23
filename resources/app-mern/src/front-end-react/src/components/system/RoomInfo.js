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


export default function RoomInfo(RoomInfoProps) {

  const[roomInfo, setRoomInfo] = useState({});


  // Change this to socket io to update the room temperature.

  // useEffect(() => {
  //   fetch(baseUrl+'/roomStatus').then(response => response.json())
  //     .then(data => setSystemInfo(data))
  //     .catch(err => {
  //       console.log(err);      }
  //     )
  // }, []);

  return (
    <>
      <Card id="room-temp-card">
        <CardContent id="room-temp-card-content" className={classes.container}>

          <Typography
            component="h5"
            variant="h5"
            className={classes.title}
            gutterBottom
          >
            Room Temperature
          </Typography>

          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs={6}>
              <Typography component="h4" className={classes.labelTitle}>
                Room Temperature in Celsius, using socket-iO
              </Typography>
              <TextField
                id="room__temp__usage"
                name="room__temp__usage"
                value={roomInfo.temp}
                variant="outlined"
                size="small"
                className={classes.text}
                InputProps={{ inputProps: { maxLength: 48, readOnly: true } }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography component="h4" className={classes.labelTitle}>
                Room&nbsp;Humidity,  using socket-iO
              </Typography>
              <TextField
                id="room__humid__info"
                name="room__humid__info"
                value={roomInfo.humid}
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
