import "./idverify.css";

import FormScafold from "../../../components/form_scafold/form_scafold";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSection from "../../../components/form_section/form_section";
import FileInput from "../../../components/file_input/file_input";
import TextInput from "../../../components/text_input/text_input";
import SelectInput from "../../../components/select_input/select_input";

export default function Idverification() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const hadnleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/income");
    }, 3000);
  };

  const handleIdImageChange = (id, image) => {
    setIsLoading(true);
    setTimeout(() => {
      setFormData({
        [id]: image,
        firstName: "Peter",
        lastName: "DSouza",
        resStatus: 1,
        emIdNo: "1232132312321321",
        nationality: "in",
        dob: "1990-01-01",
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleFieldChange = (id, value) => {
    setFormData((_formData) => ({ ..._formData, [id]: value }));
  };

  return (
    <div className="Idverification">
      <FormScafold step={1} onSubmit={hadnleSubmit} loading={isLoading}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "24px",
            // maxWidth: "1492px",
            // margin: "0 auto",
          }}
        >
          <FormSection title="Upload Emirates ID">
            <FileInput
              id="emirateId"
              value={formData["emirateId"]}
              onChange={handleIdImageChange}
            />
          </FormSection>
          <FormSection title="Personal Information">
            <TextInput
              id="firstName"
              label="First Name *"
              widthFr={0.5}
              placeholder="Jone"
              value={formData["firstName"]}
              onChange={handleFieldChange}
            />
            <TextInput
              id="lastName"
              label="Last Name *"
              widthFr={0.5}
              placeholder="Doe"
              value={formData["lastName"]}
              onChange={handleFieldChange}
            />
            <SelectInput
              id="resStatus"
              label="Residency Status *"
              widthFr={0.5}
              options={[
                { value: 1, label: "Resident" },
                { value: 2, label: "Temp" },
              ]}
              value={formData["resStatus"]}
              onChange={handleFieldChange}
            />
            <TextInput
              id="emIdNo"
              label="Emirates ID Number *"
              widthFr={0.5}
              value={formData["emIdNo"]}
              onChange={handleFieldChange}
            />
            <SelectInput
              id="nationality"
              label="Nationality *"
              widthFr={0.5}
              options={[
                { value: "in", label: "India" },
                { value: "uae", label: "UAE" },
              ]}
              value={formData["nationality"]}
              onChange={handleFieldChange}
            />
            <TextInput
              id="pnNum"
              label="Phone Number *"
              widthFr={0.5}
              placeholder="(123) 456 - 7890"
              value={formData["pnNum"]}
              onChange={handleFieldChange}
            />
            <TextInput
              id="dob"
              label="Date of Birth *"
              widthFr={0.5}
              type="date"
              value={formData["dob"]}
              onChange={handleFieldChange}
            />
            <TextInput
              id="email"
              label="Email *"
              widthFr={0.5}
              placeholder="abc@example.com"
              value={formData["email"]}
              onChange={handleFieldChange}
            />
          </FormSection>
        </div>
      </FormScafold>
    </div>
  );
}
