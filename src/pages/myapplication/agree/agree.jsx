import { useNavigate } from 'react-router-dom';
import './agree.css';
import { useState } from "react";
import FormScafold from '../../../components/form_scafold/form_scafold';


export default function Agreement() {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const hadnleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/successfull')
        }, 3000)
    }

    return (
        <div className='Agree'>
            <FormScafold step={4} onSubmit={hadnleSubmit} loading={isLoading} />
        </div>
    )
} 
