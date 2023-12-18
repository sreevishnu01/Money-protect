import classes from "./my_applications.module.css";
import NewApplicationLink from "../../components/new_application_link/new_application_link";
import { useState } from "react";
import ApplicationCardInfo from "../../components/info_card/application/application_card_info";

const statuses = ["Required Attention", "Draft", "In Review", "Rejected"];
const applications = [
  {
    status: "In Review",
  },
  {
    status: "Required Attention",
  },
  {
    status: "Rejected",
  },
  {
    status: "Draft",
  },
  {
    status: "Approved",
  },
  {
    status: "Approved",
  },
];

const statusColorMap = {
  "Required Attention": "secondary",
  Draft: "primary",
  "In Review": "warning",
  Rejected: "error",
};

function MyApplications() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <h2>My Applications</h2>
          <h6>Listing of all my Applications</h6>
        </div>
        <div>
          <NewApplicationLink />
        </div>
      </div>
      <div className={classes.statusFilter}>
        <div
          className={!selectedStatus && classes.active}
          onClick={() => setSelectedStatus(null)}
        >
          All
        </div>
        {statuses.map((status) => (
          <div
            onClick={() => setSelectedStatus(status)}
            className={selectedStatus === status && classes.active}
            key={status}
          >
            {status}
          </div>
        ))}
      </div>
      <div className={classes.applications}>
        {applications
          .filter((application) => {
            if (!selectedStatus) return true;
            return application.status === selectedStatus;
          })
          .map((application) => {
            return (
              <div>
                <ApplicationCardInfo
                  status={{
                    label: application.status,
                    color: statusColorMap[application.status] || "success",
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MyApplications;
