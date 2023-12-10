import { MenuItem, Select } from "@mui/material"

import classes from './select_input.module.css'

const SelectInput = ({ id = '', label = "label", widthFr = 1, options = [], ...rest }) => {
    return (
        <div className={classes.container} style={{ width: `${(widthFr - 0.01) * 100}%` }}>
            <label htmlFor={id} className={classes.label}>{label}</label>
            <Select id={id} hiddenLabel size="small" className={classes.textField} {...rest}>
                {options.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
            </Select>
        </div>
    )
}

export default SelectInput
