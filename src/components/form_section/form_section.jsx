import StyledPrimaryButton from "../styled/styled_primary_btn";
import classes from "./form_section.module.css";

const FormSection = ({ title = "", children, headerButton }) => {
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <h2>{title}</h2>
                {headerButton && (
                    <StyledPrimaryButton variant="text" {...headerButton}>
                        {" "}
                        {headerButton.title}
                    </StyledPrimaryButton>
                )}
            </div>
            <hr />
            <div className={classes.formElements}>{children}</div>
        </div>
    );
};

export default FormSection;
