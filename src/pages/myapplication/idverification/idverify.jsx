import './idverify.css';

import FormScafold from '../../../components/form_scafold/form_scafold';

import { Link } from 'react-router-dom';
import upload from '../../images/upload.png';
import scan from '../../images/scan.png';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function Idverification() {
    return (
        <div className='Idverification'>
            <FormScafold step={1} />
        </div>
    )
} 