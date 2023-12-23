import { Link } from "react-router-dom";
import classes from "./application_card_info.module.css";
import { Chip } from "@mui/material";

const ApplicationCardInfo = ({
  status,
  title,
  subTitle,
  refNum = "55566689027",
  subDate,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Chip
          variant="outlined"
          size="small"
          {...status}
          sx={{ marginBottom: "8px" }}
        />
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </div>
      <div className={classes.detailContainer}>
        <div>
          <p>Reference Number: </p>
          <p>{refNum}</p>
        </div>
        <div>
          <p>Submission Date:</p>
          <p>{subDate}</p>
        </div>
      </div>
      <div className={classes.footer}>
        <Link>View Details</Link>
      </div>
    </div>
  );
};

export default ApplicationCardInfo;
