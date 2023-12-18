import { Link } from "react-router-dom"
import StyledPrimaryButton from "../styled/styled_primary_btn"
import { PlusBoxIcon } from "../../assets/SVG"

const NewApplicationLink = () => {
    return (
        <Link to={"/idverification"}>
            <StyledPrimaryButton>
                {" "}
                <PlusBoxIcon style={{ marginRight: "10px" }} /> New Application
            </StyledPrimaryButton>
        </Link>
    )
}

export default NewApplicationLink
