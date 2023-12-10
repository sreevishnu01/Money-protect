import { MenuItem, Select, TextField } from "@mui/material";

import classes from "./currency_input.module.css";

const CurrencyInput = ({ id = '', label = '', widthFr = 1 }) => {
    return (
        <div style={{ width: `${(widthFr - 0.01) * 100}%` }}>
            <label htmlFor={id} className={classes.label}>{label}</label>
            <div className={classes.container}>
                <Select
                    value="aed"
                    variant="standard"
                    disableUnderline
                    sx={{ fontSize: "14px", verticalAlign: "baseline" }}
                    autoWidth={false}
                    id={`${id}-curr-select`}

                >
                    <MenuItem value="aed">AED</MenuItem>
                    <MenuItem value="usd">USD</MenuItem>
                </Select>
                <TextField
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    style={{ flex: 1 }}
                    id={id}
                />
            </div>
        </div>
    );
};

export default CurrencyInput;
