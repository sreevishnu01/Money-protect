import { Button, styled } from "@mui/material";

const StyledPrimaryButton = styled(Button)(({ variant }) => ({
  backgroundColor: variant == "text" ? "transparent" : "#D3AB61",
  color: variant == "text" ? "#D3AB61" : "white",
  textTransform: "none",
  borderRadius: '4px',
  paddingLeft: "24px",
  paddingRight: "24px",
  ":hover": {
    backgroundColor: variant == "text" ? "transparent" : "#D3AB61",
    color: variant == "text" ? "#D3AB61" : "white",
  },
}));

export default StyledPrimaryButton;
