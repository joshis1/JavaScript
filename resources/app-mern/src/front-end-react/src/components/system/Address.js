import { React, useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

import classes from "./SystemStyles.module.css";

export default function Address(qosProps) {

  const [saveState, setSaveState] = useState(false);

  const onChangeHandler = (event) => {
    qosProps.onSaveState(true);
    setSaveState(true);
  };

  const onSubmitHandler = (event) => {
    qosProps.onSaveState(false);
    setSaveState(false);
  };

  return (
    <>
      <Card id="address-card">
        <CardContent id="address-card-content">
          <Typography
            component="h5"
            variant="h5"
            className={classes.title}
            gutterBottom
          >
           QLD&nbsp;Brisbane&nbsp;Suburb
          </Typography>
          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs={6}>
              <FormControl
                id="suburb-form-control"
                className={classes.FormControl}
                size="small"
                style={{ minWidth: 300 }}
              >
                <Typography component="h4" className={classes.labelTitle}>
                  South&nbsp;Suburb
                </Typography>
                <Select
                  id="system__qld__suburb"
                  name="system__qld__suburb"
                  onChange={onChangeHandler}
                  size="small"
                  variant="outlined"
                  // default value fixes the warning Mui
                  defaultValue=""
                >
                   <MenuItem id="qld-suburb-0" value={0}>Algester</MenuItem>
                  <MenuItem id="qld-suburb-0" value={0}></MenuItem>
                  <MenuItem id="qld-suburb-1" value={1}>Algester</MenuItem>
                  <MenuItem id="qld-suburb-2" value={2}>Calamvale</MenuItem>
                  <MenuItem id="qld-suburb-3" value={3}>Sunnybank Hills</MenuItem>
                  </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Typography component="h4" className={classes.labelTitle}>
                Pin Code
              </Typography>
              <TextField
                id=""
                name="pincode"
                type="number"
                //value
                onChange={onChangeHandler}
                variant="outlined"
                size="small"
                className={classes.text}
                InputProps={{ inputProps: { maxLength: 48 } }}
              />
            </Grid>
          </Grid>
          <Box className={classes.saveButtonContainer}>
            <Button
              id="system-save-button"
              type="submit"
              onClick={onSubmitHandler}
              className={`${saveState ? `${classes.button}` : `${classes.buttonDisable}`
                }`}
              disabled={!saveState}
            >
              SAVE&nbsp;CHANGES
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
