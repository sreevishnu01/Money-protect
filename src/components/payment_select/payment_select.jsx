import { Radio } from "@mui/material";
import classes from "./payment_select.module.css";
import warningIcon from "../../assets/images/warning.png";
import TextInput from "../text_input/text_input";

const PaymentSelect = ({ paymentOptions = [], selectedValue, onChange = () => { } }) => {
    return (
        <div className={classes.container}>
            {paymentOptions.map((paymentOption) => {
                const checkId = `check-${paymentOption.value}`
                return (
                    <div className={classes.paymentItem} onClick={() => document.getElementById(checkId).click()}>
                        <div className={classes.checkContainer}>
                            <Radio id={checkId} name={checkId} onChange={() => onChange(paymentOption.value)} checked={selectedValue === paymentOption.value} value={paymentOption.value} style={{ color: "#DBA953" }} />
                            <img src={paymentOption.icon} />
                            <h6 className={classes.title}>
                                {paymentOption.title}{" "}
                                {paymentOption.subTitle && (
                                    <span className={classes.subTitle}>
                                        {" "}
                                        - {paymentOption.subTitle}
                                    </span>
                                )}
                            </h6>
                        </div>
                        <div>
                            {paymentOption.type === "wallet" && (
                                <p style={{ fontWeight: '500' }}>
                                    {paymentOption.balance}
                                </p>
                            )}
                            {paymentOption.type === "master" && paymentOption.isValid && (
                                <TextInput
                                    placeholder="CVV"
                                    type="password"
                                    widthFr={null}
                                    style={{ width: "100px", backgroundColor: "white" }}
                                />
                            )}
                            {!paymentOption.isValid && <img src={warningIcon} width={18} />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PaymentSelect;
