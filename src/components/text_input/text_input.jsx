import { TextField, Typography } from "@mui/material"

import classes from './text_input.module.css'

const TextInput = ({ id = '', label = '', widthFr = 0.33, onChange = () => { }, ...rest }) => {
    return (
        <div className={classes.container} style={{ width: widthFr != null ? `${(widthFr - 0.01) * 100}%` : undefined }}>
            <label htmlFor={id} className={classes.label}>{label}</label>
            <TextField id={id} hiddenLabel size="small" className={classes.textField} onChange={(e) => onChange(id, e.target.value)} {...rest} />
        </div>
    )
}

export default TextInput
