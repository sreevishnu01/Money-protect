import { Button, styled } from "@mui/material";

const getBtnStyle = (variant) => {
    switch(variant) {
        case "outlined":
            return {
                backgroundColor:"transparent",
                color: "black",
                borderColor: "black"
            }
        case "text":
            return {
                backgroundColor:"transparent",
                color: "#DBA953",
            }
        default:
            return {
                backgroundColor: "#DBA953",
                color: "white",
            }
    }
}

const StyledPrimaryButton = styled(Button)(({ variant }) => ({
  ...getBtnStyle(variant),
  textTransform: "none",
  borderRadius: '4px',
  paddingLeft: "24px",
  paddingRight: "24px",
  ":hover": getBtnStyle(variant),
}));

export default StyledPrimaryButton;
