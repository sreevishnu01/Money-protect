import "./loan.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormScafold from "../../../components/form_scafold/form_scafold";
import FormSection from "../../../components/form_section/form_section";
import SelectInput from "../../../components/select_input/select_input";
import TextInput from "../../../components/text_input/text_input";
import FileInput from "../../../components/file_input/file_input";

export default function Loan() {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const hadnleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/agreement");
        }, 3000);
    };

    return (
        <div className="Loan">
            <FormScafold step={3} onSubmit={hadnleSubmit} loading={isLoading}>
                <FormSection title="Product Information">
                    <SelectInput id="applyFor" label="What Product do you apply for? *" />
                    <SelectInput id="duration" label="Sleeping Period Duration *" />
                </FormSection>
                <br />
                <FormSection title="Current Loan & Mortgage Details">
                    <SelectInput
                        id="maritalStatus"
                        label="Marital Status"
                        options={[
                            { value: "married", label: "Married" },
                            { value: "single", label: "Single" },
                        ]}
                    />
                    <TextInput
                        id="spouseName"
                        label="Spouse Name"
                    />
                    <SelectInput
                        id="noOfDepend"
                        label="Number of Dependencies"
                        options={[
                            { value: 0, label: "0" },
                            { value: 1, label: "1" },
                            { value: 2, label: "2" },
                        ]}
                    />
                </FormSection>
                <br />
                <FormSection title="Upload Documents">
                    <FileInput id="doc1" widthFr={0.48} label="Document 1" />
                    <FileInput id="doc2" widthFr={0.48} label="Document 1" />
                </FormSection>
            </FormScafold>
        </div>
    );
}
