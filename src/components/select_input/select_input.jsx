import { MenuItem, Select } from "@mui/material";

import classes from "./select_input.module.css";

const SelectInput = ({
  id = "",
  label = "",
  widthFr = 0.33,
  options = [],
  onChange = () => {},
  value,
  ...rest
}) => {
  return (
    <div
      className={classes.container}
      style={{ width: `${(widthFr - 0.01) * 100}%` }}
    >
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <Select
        id={id}
        hiddenLabel
        size="small"
        className={classes.textField}
        onChange={(e) => onChange(id, e.target.value)}
        value={value || 0}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
