import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page = () => {
  const option = {
    title: {
      text: ' Bar Charts '
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: ['Shirts', 'Wool Sweaters', 'Chiffon Shirts', 'Pants', 'High Heels', 'Socks']
    },
    yAxis: {},
    series: [{
      name: 'Sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 500, width: '90%', margin: '2% auto' }}
    opts={{ renderer: 'svg' }}
  />;
};

export default Page;