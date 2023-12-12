import { useNavigate } from "react-router-dom";
import "./income.css";

import { useState } from "react";
import FormScafold from "../../../components/form_scafold/form_scafold";
import FormSection from "../../../components/form_section/form_section";
import TextInput from "../../../components/text_input/text_input";
import SelectInput from "../../../components/select_input/select_input";
import CurrencyInput from "../../../components/currency_input/currency_input";
import RadioInput from "../../../components/radio_input/radio_input";

const fieldWidthFr = 0.33;

export default function Income() {
    const [formData, setFormData] = useState({ clientType: 1 })
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const hadnleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/loan");
        }, 3000);
    };

    const handleFieldChange = (id, value) => {
        setFormData(
            _formData => ({ ..._formData, [id]: value })
        )
    }


    return (
        <div className="Income">
            <FormScafold step={2} onSubmit={hadnleSubmit} loading={isLoading}>
                <FormSection title="General Information">
                    <TextInput id="company" label="Company" widthFr={fieldWidthFr} />
                    <TextInput id="jobTitle" label="Job Title" widthFr={fieldWidthFr} />
                    <SelectInput
                        id="industry"
                        label="Industry"
                        widthFr={fieldWidthFr}
                        options={[
                            { value: "erp", label: "ERP System" },
                            { value: "telcom", label: "Telecomunication" },
                        ]}
                    />
                    <SelectInput
                        id="empStatus"
                        label="Employement Status"
                        widthFr={fieldWidthFr}
                        options={[
                            { value: "emp", label: "Employee at a Company" },
                            { value: "freelance", label: "Freelancer" },
                        ]}
                    />
                    <TextInput
                        id="joinDate"
                        label="Joining Date"
                        widthFr={fieldWidthFr}
                        type="date"
                    />
                </FormSection>
                <br />
                <FormSection title="Civil Status">
                    <SelectInput
                        id="maritalStatus"
                        label="Marital Status"
                        widthFr={fieldWidthFr}
                        options={[
                            { value: "married", label: "Married" },
                            { value: "single", label: "Single" },
                        ]}
                    />
                    <TextInput
                        id="spouseName"
                        label="Spouse Name"
                        widthFr={fieldWidthFr}
                    />
                    <SelectInput
                        id="noOfDepend"
                        label="Number of Dependencies"
                        widthFr={fieldWidthFr}
                        options={[
                            { value: 0, label: "0" },
                            { value: 1, label: "1" },
                            { value: 2, label: "2" },
                        ]}
                    />
                </FormSection>
                <br />
                <FormSection title="Income">
                    <CurrencyInput
                        id="monthlyIncome"
                        label="Monthly Income"
                        widthFr={fieldWidthFr}
                    />
                    <CurrencyInput
                        id="monthlyExpences"
                        label="Monthly Expences"
                        widthFr={fieldWidthFr}
                    />
                </FormSection>
                <br />
                <FormSection title="Beneficiary Details">
                    <RadioInput
                        id="clientType"
                        value={formData['clientType']}
                        onChange={handleFieldChange}
                        options={[
                            {
                                value: 1,
                                title: "Individual Client",
                                subtitle: "Lorem opsmep bsnjsui, snm",
                            },
                            {
                                value: 2,
                                title: "Corporate Client",
                                subtitle: "Lorem opsmep bsnjsui, snm",
                            },
                        ]}
                    />
                    {formData.clientType === 2 && (
                        <>
                            <TextInput
                                id="workPn"
                                label="Work Phone Number"
                                widthFr={fieldWidthFr}
                                placeholder="(123) 456 - 7890"
                            />
                            <TextInput
                                id="workEmail"
                                label="Work Email Address"
                                widthFr={fieldWidthFr}
                                placeholder="abc@example.com"
                            />
                        </>
                    )}
                </FormSection>
            </FormScafold>
        </div>
    );
}
