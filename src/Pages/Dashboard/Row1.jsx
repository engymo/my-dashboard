import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Typography } from '@mui/material';
import { DynamicFeed, HourglassFull, LocalPostOffice, Person2Sharp } from '@mui/icons-material';
import ReactECharts from 'echarts-for-react';

const Ro = () => [
  {
    id: 1,
    icon: <LocalPostOffice sx={{ color: '#af52bf' }} />,
    value: '12.361',
    title: 'Emails sent',
    chartValue: '+14%',
    Percentage: 20,
    color: '#ff3d00',
    bgColor: '#ff9800'

  },
  {
    id: 2,
    icon: <HourglassFull sx={{ color: '#af52bf' }} />,
    value: '431.225',
    title: 'Sales obtained',
    chartValue: '+21%',
    Percentage: 25,
    color: '#4615b2',
    bgColor: '#f50057'
  },
  {
    id: 3,
    icon: <Person2Sharp sx={{ color: '#af52bf' }} />,
    value: '32.361',
    title: 'New customers',
    chartValue: '+5%',
    Percentage: 10,
    color: '#f50057',
    bgColor: '#4615b2'
  },
  {
    id: 4,
    icon: <DynamicFeed sx={{ color: '#af52bf' }} />,
    value: '12.361,225',
    title: 'Trafic received',
    chartValue: '+43%',
    Percentage: 40,
    color: '#ff9800',
    bgColor: '#4caf50',
  },

]


function Row1() {
  function miniChartOption(value, color,bgColor) {
    return {
      series: [
        {
          type: 'pie',
          radius: ['60%', '82%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          silent: true,
          label: { show: false },
          data: [
            { value: value, itemStyle: { color: color , borderRadius:3 } },
            { value: 100 - value, itemStyle: { color: bgColor , borderRadius:5  } },
          ],
        },
      ],
    };
  }
  

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        flexWrap={'wrap'}

        sx={{
          marginTop: '4%',
          justifyContent: {
            xs: 'center',
            sm: 'space-between',

          },
        }}>
        {Ro().map((item) => (
          <Paper
            key={item.id}
            sx={{
              borderRadius: '10px',
              minWidth: '400px',
              display: 'flex',
              padding: '10px',
              justifyContent: 'space-between',
            }}
            elevation={4}
          >
            <Stack direction="column">
              {item.icon}
              <Typography sx={{ fontSize: '11px', my: 1 }}>{item.value}</Typography>
              <Typography sx={{ fontSize: '11px' }}>{item.title}</Typography>
            </Stack>

            <Stack direction="column">
              <ReactECharts option={miniChartOption(item.Percentage,item.color,item.bgColor)} style={{ height: 60, width: 60 }} />
              <Typography sx={{ fontSize: '11px', textAlign: 'center', my: 1 }}>{item.chartValue}</Typography>
            </Stack>
          </Paper>
        ))}
      </Stack >
    </>
  )
}

export default Row1