import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 25, label: 'Paid',  color:'#ff0000'},
  { value: 37, label: 'Pending', color:"#f2a73b" },
  { value: 38, label: 'Overdue', color:"#42cc7d" },
];

const size = {
  width: 500,
  height: 250,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <g>
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    </g>
    
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>
        Total
        <br />
        2.56M
      </PieCenterLabel>
    </PieChart>
  );
}
