import * as React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const series = [
    {
        type: 'line',
        yAxisKey: 'pib',
        color: 'red',
        data: [10000, 26000, 33000, 25000, 40000, 35000],
      },
    {
        type: 'bar',
        stack: '',
        yAxisKey: 'eco',
        data: [10000, 30000, 25000, 40000, 35000, 25000],
    },

  
];

export default function BarChart() {
  return (
    <ChartContainer
      series={series}
      width={450}
      height={300}
      xAxis={[
        {
          id: 'years',
          data: ["Jun","Jul","Aug","Sep","Oct","Nov"],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        
        {
          id: 'pib',
          scaleType: 'log',
        },
        {
            id: 'eco',
            scaleType: 'linear',
          },
      ]}
    >
      <BarPlot />
      <ChartsXAxis label="" position="bottom" axisId="years" />
      {/* <ChartsYAxis label="Results" position="left" axisId="eco" /> */}
      <ChartsYAxis label="" position="left" axisId="pib" />
    </ChartContainer>
  );
}