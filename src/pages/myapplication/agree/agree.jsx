import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormScafold from "../../../components/form_scafold/form_scafold";
import FormSection from "../../../components/form_section/form_section";
import classes from "./agree.module.css";
import DocumentViewer from "../../../components/document_veiwer/document_veiwer";

const summeryData = [
    {
        title: "Convenance",
        amount: '8,000',
        currency: "AED",
    },
    {
        title: "Broker Commission",
        amount: '8,000',
        currency: "AED",
    },
    {
        title: "Dubai land department fee",
        amount: '8,000',
        currency: "AED",
    },
    {
        title: "Mortgage Processing",
        amount: '8,000',
        currency: "AED",
    },
    {
        title: "Registration Fee",
        amount: '8,000',
        currency: "AED",
    },
    {
        title: "Valuation",
        amount: '8,000',
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
        <div className={`${classes.summaryItem} ${shouldBold === true ? classes.bold : ''}`}>
            <p>{summery.title}</p>
            <h6>
                <span>{summery.currency} </span>
                {summery.amount}
            </h6>
        </div>
    )

    return (
        <div className={classes.Agree}>
            <FormScafold step={4} onSubmit={hadnleSubmit} loading={isLoading}>
                <div style={{ display: "flex", gap: 24 }}>
                    <div style={{ flex: 1 }}>
                        <FormSection title="Sign Agreement">
                            <DocumentViewer />
                        </FormSection>
                        <br />
                        <FormSection title="Payment Method"></FormSection>
                        <br />
                        <FormSection title="Payment Method"></FormSection>
                    </div>
                    <div style={{ minWidth: "30%" }}>
                        <FormSection title="Payment Summary">
                            <div style={{ width: '100%' }}>
                                {summeryData.map(renderSummeryData)}
                                <hr />
                                {renderSummeryData({ title: 'Down Payment', amount: '8,000', currency: 'AED' })}
                                {renderSummeryData({ title: 'Total Extra', amount: '8,000', currency: 'AED' })}
                                <div className={classes.totalSeparator} />
                                {renderSummeryData({ title: 'Total Payment', amount: '8,000', currency: 'AED' }, true)}
                            </div>

                        </FormSection>
                    </div>
                </div>
            </FormScafold>
        </div>
    );
}
