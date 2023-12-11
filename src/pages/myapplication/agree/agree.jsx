import "./agree.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormScafold from "../../../components/form_scafold/form_scafold";
import FormSection from "../../../components/form_section/form_section";
import classes from "./agree.module.css";
import DocumentViewer from "../../../components/document_veiwer/document_veiwer";
import TextInput from "../../../components/text_input/text_input";
import wallet from "../../images/wallet.png";
import card from "../../images/card-icons.png";
import Status from "../../images/Status icon.png";
import applepay from "../../images/ApplePay.png";
import check from "../../images/checks.png";
import { Checkbox } from "@mui/material";

const summeryData = [
    {
        title: "Convenance",
        amount: "8,000",
        currency: "AED",
    },
    {
        title: "Broker Commission",
        amount: "8,000",
        currency: "AED",
    },
    {
        title: "Dubai land department fee",
        amount: "8,000",
        currency: "AED",
    },
    {
        title: "Mortgage Processing",
        amount: "8,000",
        currency: "AED",
    },
    {
        title: "Registration Fee",
        amount: "8,000",
        currency: "AED",
    },
    {
        title: "Valuation",
        amount: "8,000",
        currency: "AED",
    },
];

export default function Agreement() {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const hadnleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/successfull");
        }, 3000);
    };

    const renderSummeryData = (summery, shouldBold = false) => (
        <div
            className={`${classes.summaryItem} ${shouldBold === true ? classes.bold : ""
                }`}
        >
            <p>{summery.title}</p>
            <h6>
                <span>{summery.currency} </span>
                {summery.amount}
            </h6>
        </div>
    );

    return (
        <div className={classes.Agree}>
            <FormScafold step={4} onSubmit={hadnleSubmit} loading={isLoading}>
                <div style={{ display: "flex", gap: 24 }}>
                    <div style={{ flex: 1 }}>
                        <FormSection title="Sign Agreement">
                            <DocumentViewer
                                title="Document Name Here"
                                description="Document 1 line Description here"
                                btnTitle="View Agreement"
                                documentLink="https://www.africau.edu/images/default/sample.pdf"
                            />
                            <TextInput label="Sign Document" widthFr={1} placeholder="Enter your name to sign document" />
                            <div className={classes.checkboxContainer} >
                                <Checkbox id="agree" style={{ color: '#DBA953', borderRadius: '4px' }} />
                                <label htmlFor="agree">I have read & agree to the agreement</label>
                            </div>
                        </FormSection>
                        <br />
                        <FormSection title="Payment Method">
                            <div class="payment_cont">
                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio" />

                                        <div>
                                            <img src={wallet} alt="" />
                                        </div>

                                        <p>wallet</p>
                                    </div>

                                    <p>12,076.63 AED</p>
                                </div>

                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio" />
                                        <div>
                                            <img src={card} alt="" />
                                        </div>
                                        <p>xxxx-4455</p>-
                                    </div>

                                    <input type="text" placeholder="CVV" />
                                </div>

                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio" />

                                        <div>
                                            <img src={card} alt="" />
                                        </div>

                                        <p>xxxx-5672</p>
                                    </div>

                                    <span>
                                        <img src={Status} alt="" />
                                    </span>
                                </div>

                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio" />

                                        <div>
                                            <img src={applepay} alt="" />
                                        </div>

                                        <p>Apple Pay</p>
                                    </div>
                                </div>
                            </div>
                        </FormSection>
                        <br />
                    </div>
                    <div style={{ minWidth: "30%" }}>
                        <FormSection title="Payment Summary">
                            <div style={{ width: "100%" }}>
                                {summeryData.map(renderSummeryData)}
                                <hr />
                                {renderSummeryData({
                                    title: "Down Payment",
                                    amount: "8,000",
                                    currency: "AED",
                                })}
                                {renderSummeryData({
                                    title: "Total Extra",
                                    amount: "8,000",
                                    currency: "AED",
                                })}
                                <div className={classes.totalSeparator} />
                                {renderSummeryData(
                                    { title: "Total Payment", amount: "8,000", currency: "AED" },
                                    true
                                )}
                            </div>
                        </FormSection>
                    </div>
                </div>
            </FormScafold>
        </div>
    );
}
