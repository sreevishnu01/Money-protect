import './loan.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FormScafold from '../../../components/form_scafold/form_scafold';


export default function Loan() {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const hadnleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/agreement')
        }, 3000)
    }

    return (
        <div className='Loan'>
            <FormScafold step={3} onSubmit={hadnleSubmit} loading={isLoading} />
        </div>
    )
} 