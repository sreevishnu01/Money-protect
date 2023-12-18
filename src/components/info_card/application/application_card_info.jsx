import { Link } from "react-router-dom";
import classes from "./application_card_info.module.css";
import { Chip } from "@mui/material";

const ApplicationCardInfo = ({ status }) => {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Chip
          variant="outlined"
          size="small"
          {...status}
          sx={{ marginBottom: "8px" }}
        />
        <h4>Application Name</h4>
        <p>Product name here</p>
      </div>
      <div className={classes.detailContainer}>
        <div>
          <p>Reference Number: </p>
          <p>55566689027</p>
        </div>
        <div>
          <p>Submission Date:</p>
          <p>23/07/2023</p>
        </div>
      </div>
      <div className={classes.footer}>
        <Link>View Details</Link>
      </div>
    </div>
  );
};

export default ApplicationCardInfo;
