import { React} from "react";
import { Typography } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import classes from "./SystemStyles.module.css";


export default function NetworkInfo() {

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
            Network Information
          </Typography>

          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs={6}>
              <Typography component="h4" className={classes.labelTitle}>
                IPv4 Address
              </Typography>
              <TextField
                id="system__ip__address"
                name="system__ip__address"
                //value
                onChange={onChangeHandler}
                variant="outlined"
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
