import "./loan.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormScafold from "../../../components/form_scafold/form_scafold";
import FormSection from "../../../components/form_section/form_section";
import SelectInput from "../../../components/select_input/select_input";
import TextInput from "../../../components/text_input/text_input";
import FileInput from "../../../components/file_input/file_input";
import StyledPrimaryButton from "../../../components/styled/styled_primary_btn";
import { Add } from "@mui/icons-material";

// Sleeping Period with Equity Release
// Sleeping Period Without Equity Release
const applyForOptions = [
  {
    value: 1,
    label: "Equity Release (No Loan)",
  },
  {
    value: 2,
    label: "Sleeping Period with Equity Release",
  },
  {
    value: 3,
    label: "Sleeping Period Without Equity Release",
  },
];

export default function Loan() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [additionalDocumentCount, setAdditionalDocumentCount] = useState(2);
  const [formData, setFormData] = useState({ applyFor: 1 });

  const hadnleSubmit = () => {
    setIsLoading(true);
    const data = JSON.parse(localStorage.getItem("CURRENT_APPLICATION"));
    data.loan = formData;
    localStorage.setItem("CURRENT_APPLICATION", JSON.stringify(data));
    setTimeout(() => {
      setIsLoading(false);
      navigate("/agreement");
    }, 2000);
  };

  const handleOnFieldChange = (id, value) => {
    setFormData((currentData) => ({ ...currentData, [id]: value }));
  };

  return (
    <div className="Loan">
      <FormScafold step={3} onSubmit={hadnleSubmit} loading={isLoading}>
        <FormSection title="Product Information">
          <SelectInput
            id="applyFor"
            label="What Product do you apply for? *"
            options={applyForOptions}
            onChange={handleOnFieldChange}
            value={formData["applyFor"]}
          />
          {formData.applyFor !== 1 && (
            <SelectInput
              id="duration"
              label="Sleeping Period Duration *"
              onChange={handleOnFieldChange}
              value={formData.duration}
              options={Array.from(Array(10)).map((_, index) => ({
                value: index,
                label: `${index} years`,
              }))}
            />
          )}
        </FormSection>
        <br />
        <FormSection title="Upload Documents">
          {Array.from(Array(additionalDocumentCount))
            .fill(1)
            .map((value, index) => (
              <FileInput
                id={`doc${index + 1}`}
                widthFr={0.48}
                label={`Document ${index + 1}`}
              />
            ))}
          <div style={{ width: "100%" }}>
            <StyledPrimaryButton
              onClick={() => setAdditionalDocumentCount((_) => _ + 1)}
            >
              <Add /> Add More
            </StyledPrimaryButton>
          </div>
        </FormSection>
      </FormScafold>
    </div>
  );
}
