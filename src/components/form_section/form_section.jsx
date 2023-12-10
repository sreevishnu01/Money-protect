import classes from './form_section.module.css'

const FormSection = ({ title = '', children }) => {
    return (
        <div className={classes.container}>
            <h2>{title}</h2>
            <hr />
            <div className={classes.formElements}>
                {children}
            </div>
        </div>
    )
}

export default FormSection
