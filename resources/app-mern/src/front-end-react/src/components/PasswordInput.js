import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "24ch",
    height: "2.6rem",
  },
  disable: {
    width: "24ch",
    height: "2.8rem",
    backgroundColor: "#cccccc",
  },
}));

export default function PasswordInput(props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <OutlinedInput
      name={props.name}
      className={props.disabled ? classes.disable : classes.textField}
      disabled={props.disabled}
      type={showPassword ? "text" : "password"}
      onChange={props.onChange}
      value={props.value}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            size="small"
            edge="end"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
            onMouseDown={(event) => event.preventDefault()}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      labelWidth={0}
    />
  );
}
