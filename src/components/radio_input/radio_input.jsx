import { Radio } from "@mui/material";
import classes from "./radio_input.module.css";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";

const RadioInput = ({ id = "", value, options = [], onChange }) => {
  return (
    <div id={id} className={classes.container}>
      {options.map((option) => (
        <div
          className={`${classes.radioItem} ${
            option.value == value ? classes.checked : classes.unchecked
          }`}
          onClick={() => onChange(id, option.value)}
        >
          {option.value == value ? (
            <RadioButtonChecked className={classes.checkIcon} />
          ) : (
            <RadioButtonUnchecked className={classes.checkIcon} />
          )}
          <div className={classes.descp}>
            <h6>{option.title}</h6>
            {option.subtitle && <p>{option.subtitle}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
