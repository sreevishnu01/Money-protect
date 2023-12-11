import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Checkbox, IconButton, Modal } from "@mui/material";
import FormScafold from "../../../components/form_scafold/form_scafold";
import FormSection from "../../../components/form_section/form_section";
import classes from "./agree.module.css";
import DocumentViewer from "../../../components/document_veiwer/document_veiwer";
import TextInput from "../../../components/text_input/text_input";
import wallet from "../../images/wallet.png";
import card from "../../images/card-icons.png";
import applepay from "../../images/ApplePay.png";
import PaymentSelect from "../../../components/payment_select/payment_select";

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

const paymentOptions = [
    {
        value: "1",
        type: "wallet",
        title: "Wallet",
        isValid: true,
        balance: "12,076.63 AED",
        icon: wallet,
    },
    {
        value: "2",
        type: "master",
        title: "xxxx-4455",
        isValid: true,
        subTitle: "Expired on 05/26",
        icon: card,
    },
    {
        value: "3",
        type: "master",
        title: "xxxx-5672",
        isValid: false,
        subTitle: "Expired on 05/21",
        icon: card,
    },
    {
        value: "4",
        type: "apple",
        title: "Apple Pay",
        isValid: true,
        icon: applepay,
    },
];

export default function Agreement() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('1');
    const [showAddCardForm, setShowAddCardForm] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const navigate = useNavigate();

    const hadnleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccessModal(true)
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
            <Modal open={showSuccessModal} >
                <div className={classes.modalContainer}>
                    <div style={{ textAlign: 'end', width: '100%' }}>
                        <IconButton onClick={() => setShowSuccessModal(false)}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 13L13 23M13 13L23 23" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </IconButton>
                    </div>
                    <svg width="93" height="92" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                            <rect x="11.5" y="11" width="70" height="70" rx="35" stroke="#DBA953" stroke-width="2" />
                        </g>
                        <g opacity="0.1">
                            <rect x="1.5" y="1" width="90" height="90" rx="45" stroke="#DBA953" stroke-width="2" />
                        </g>
                        <path d="M35.9998 46L42.9998 53L56.9998 39M69.8332 46C69.8332 58.8866 59.3865 69.3333 46.4998 69.3333C33.6132 69.3333 23.1665 58.8866 23.1665 46C23.1665 33.1134 33.6132 22.6667 46.4998 22.6667C59.3865 22.6667 69.8332 33.1134 69.8332 46Z" stroke="#DBA953" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h3>Successfully Submitted</h3>
                    <p>Your application is successfully submitted, you can track your application status from your dashboard.</p>
                </div>
            </Modal>
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
                            <TextInput
                                label="Sign Document"
                                widthFr={1}
                                placeholder="Enter your name to sign document"
                            />
                            <div className={classes.checkboxContainer}>
                                <Checkbox
                                    id="agree"
                                    style={{ color: "#DBA953", borderRadius: "4px" }}
                                />
                                <label htmlFor="agree">
                                    I have read & agree to the agreement
                                </label>
                            </div>
                        </FormSection>
                        <br />
                        {!showAddCardForm ? (
                            <FormSection title="Payment Method" headerButton={{ title: '+ Add new Card', onClick: () => setShowAddCardForm(true) }}>
                                <PaymentSelect
                                    paymentOptions={paymentOptions}
                                    selectedValue={selectedPayment}
                                    onChange={setSelectedPayment}
                                />
                            </FormSection>
                        ) : (
                            <FormSection title="Payment Method" headerButton={{ title: 'X Cancel', onClick: () => setShowAddCardForm(false) }}>
                                <TextInput label="Card Holder’s Name" widthFr={0.51} placeholder="Enter name on the card" />
                                <TextInput label="Card Number" widthFr={0.51} placeholder="Enter 16 Digit Card Number" />
                                <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
                                    <TextInput label="Expiry Date" widthFr={0.5} placeholder="MM/YY" />
                                    <TextInput label="CVV" widthFr={0.5} placeholder="Security Code" type="password" />
                                </div>
                            </FormSection>
                        )}
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
