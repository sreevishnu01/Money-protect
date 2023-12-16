import { CheckSuccessIcon, DollarWarningIcon, ExclamationDangerIcon, PageSuccessIcon, PlusBoxIcon } from "../../assets/SVG";
import AmountInfoCard from "../../components/info_card/amount_info_card";
import StyledPrimaryButton from "../../components/styled/styled_primary_btn";
import classes from "./dashboard.module.css";

function Dashboard() {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <h6>Good Morning Gary!</h6>
                    <h2>DashBoard</h2>
                </div>
                <div>
                    <StyledPrimaryButton>
                        {" "}
                        <PlusBoxIcon style={{ marginRight: "10px" }} /> New Application
                    </StyledPrimaryButton>
                </div>
            </div>
            <div className={classes.amountInfoCards}>
                <div>
                    <AmountInfoCard icon={<CheckSuccessIcon />} title="Paid" amount="AED 2.56 M" />
                </div>
                <div>
                    <AmountInfoCard icon={<DollarWarningIcon />} title="Remaining" amount="AED 1.87 M" />
                </div>
                <div>
                    <AmountInfoCard icon={<ExclamationDangerIcon />} title="Overdue" amount="AED 34 K" />
                </div>
                <div>
                    <AmountInfoCard icon={<PageSuccessIcon />} title="Total Due" amount="AED 2.56 M" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
