import { TextField, Typography } from "@mui/material"

import classes from './text_input.module.css'

const TextInput = ({ id = '', label = "label", widthFr = 0.33, ...rest }) => {
    return (
        <div className={classes.container} style={{ width: `${(widthFr - 0.01) * 100}%` }}>
            <label htmlFor={id} className={classes.label}>{label}</label>
            <TextField id={id} hiddenLabel size="small" className={classes.textField} {...rest} />
        </div>
    )
}

export default TextInput
