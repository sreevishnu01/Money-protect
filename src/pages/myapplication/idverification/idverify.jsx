import './idverify.css'

import FormScafold from '../../../components/form_scafold/form_scafold'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormSection from '../../../components/form_section/form_section'
import FileInput from '../../../components/file_input/file_input'
import TextInput from '../../../components/text_input/text_input'
import SelectInput from '../../../components/select_input/select_input'

export default function Idverification() {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const hadnleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/income')
        }, 3000)
    }

    return (
        <div className='Idverification'>
            <FormScafold step={1} onSubmit={hadnleSubmit} loading={isLoading}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '24px' }}>
                    <FormSection title="Upload Emirates ID">
                        <FileInput id="up-emirate-id" />
                    </FormSection>
                    <FormSection title="Personal Information">
                        <TextInput id='firstName' label='First Name *' widthFr={0.5} placeholder="Jone" />
                        <TextInput id='lastName' label='Last Name *' widthFr={0.5} placeholder="Doe" />
                        <SelectInput id='resStatus' label='Residency Status *' widthFr={0.5} options={[{ value: 1, label: 'Residant' }, { value: 2, label: 'Temp' }]} />
                        <TextInput id='emIdNo' label='Emirates ID Number *' widthFr={0.5} />
                        <SelectInput id='nationality' label='Natinality *' widthFr={0.5} options={[{ value: 'in', label: 'India' }, { value: 'uae', label: 'UAE' }]} />
                        <TextInput id='pnNum' label='Phone Number *' widthFr={0.5} placeholder="(123) 456 - 7890" />
                        <TextInput id='dob' label='Date of Birth *' widthFr={0.5} type="date" dat />
                        <TextInput id='email' label='Email *' widthFr={0.5} placeholder="abc@example.com" />
                    </FormSection>

                </div>
            </FormScafold>
        </div>
    )
} 