import classes from './amount_info_card.module.css'

const AmountInfoCard = ({ amount = 'AED 0.00', title = "", icon = null }) => {
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                {icon}
                <h6>{title}</h6>
            </div>
            <hr />
            <h3>{amount}</h3>
        </div>
    )
}

export default AmountInfoCard
