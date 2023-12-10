import { useNavigate } from 'react-router-dom';
import './income.css';

import { useState } from 'react';
import FormScafold from '../../../components/form_scafold/form_scafold';




export default function Income() {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const hadnleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/loan')
        }, 3000)
    }

    return (
        <div className='Income'>
            <FormScafold step={2} onSubmit={hadnleSubmit} loading={isLoading} />
        </div>
    )
} 