import './idverify.css'

import FormScafold from '../../../components/form_scafold/form_scafold'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            <FormScafold step={1} onSubmit={hadnleSubmit} loading={isLoading} />
        </div>
    )
} 