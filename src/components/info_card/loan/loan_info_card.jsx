import { Link } from 'react-router-dom'
import classes from './loan_info_card.module.css'

const LoanInfoCard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <h4>123456789</h4>
                <p>Account No.</p>
            </div>
            <div className={classes.detailContainer}>
                <div>
                    <h6>AED 2,000,000</h6>
                    <p>Loan Amount</p>
                </div>
                <div>
                    <h6>50,000</h6>
                    <p>Down Payment</p>
                </div>
                <div>
                    <h6>5 Years</h6>
                    <p>Tenure</p>
                </div>
            </div>
            <div className={classes.footer}>
                <Link>View Details</Link>
            </div>
        </div>
    )
}

export default LoanInfoCard
