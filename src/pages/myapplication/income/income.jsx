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
const industries = [
  "Aviation",
  "Energy",
  "Oil and Gas",
  "Construction and Real Estate",
  "Tourism and Hospitality",
  "Finance and Banking",
  "Information Technology (IT)",
  "Healthcare",
  "Education",
  "Telecommunications",
  "Retail",
  "Media and Entertainment",
  "Legal Services",
  "Automotive Industry",
  "Renewable Energy",
  "Logistics and Supply Chain",
  "Human Resources and Recruitment",
  "Manufacturing",
  "Environmental and Sustainability",
];

const empStatuses = ["Employed", "Self Employed", "Student", "Retired"];

export default function Income() {
  const [formData, setFormData] = useState({ clientType: 1 });
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
    setFormData((_formData) => ({ ..._formData, [id]: value }));
  };

  return (
    <div className="Income">
      <FormScafold step={2} onSubmit={hadnleSubmit} loading={isLoading}>
        <FormSection title="Beneficiary Details">
          <RadioInput
            id="clientType"
            value={formData["clientType"]}
            onChange={handleFieldChange}
            options={[
              {
                value: 1,
                title: "Individual Client",
              },
              {
                value: 2,
                title: "Corporate Client",
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
              <TextInput
                id="tradeLicenseNo"
                label="Trade License Number"
                widthFr={fieldWidthFr}
                placeholder="123456789"
              />
              <TextInput
                id="vatRegistrationNo"
                label="VAT Registration Number"
                widthFr={fieldWidthFr}
                placeholder="123456789"
              />
            </>
          )}
        </FormSection>
        <br />
        <FormSection title="General Information">
          <TextInput id="company" label="Company" widthFr={fieldWidthFr} />
          <TextInput id="jobTitle" label="Job Title" widthFr={fieldWidthFr} />
          <SelectInput
            id="industry"
            label="Industry"
            widthFr={fieldWidthFr}
            onChange={() => {}}
            options={industries.map((industry) => ({
              value: industry,
              label: industry,
            }))}
          />
          <SelectInput
            id="empStatus"
            label="Employement Status"
            widthFr={fieldWidthFr}
            options={empStatuses.map((emp) => ({ value: emp, label: emp }))}
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
            editable
            options={[
              { value: 0, label: "0" },
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" },
              { value: 6, label: "6" },
              { value: 7, label: "7" },
              { value: 8, label: "8" },
              { value: 9, label: "9" },
              { value: 10, label: "10" },
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
      </FormScafold>
    </div>
  );
}
