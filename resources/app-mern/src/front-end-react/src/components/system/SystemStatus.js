import { React} from "react";
import { Typography } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import classes from "./SystemStyles.module.css";


export default function SystemStatus(SystemProps) {
  
  const onChangeHandler = (event) => {
   
  };
  
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
                //value
                onChange={onChangeHandler}
                variant="outlined"
                size="small"
                className={classes.text}
                InputProps={{ inputProps: { maxLength: 48, readOnly: true } }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography component="h4" className={classes.labelTitle}>
                Available&nbsp;Memory
              </Typography>
              <TextField
                id="system__memory__available"
                name="system__memory__available"
                //value
                onChange={onChangeHandler}
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
