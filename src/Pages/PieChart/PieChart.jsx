import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const PieChart= () => {
  const option = {
    title : {
      text: ' Pie Chart',
      subtext: 'Country',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Email Marketing', 'Affiliate Ads', 'Video Ads', 'Search Engine']
    },
    series: [
      {
        name: 'Traffic Source',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email Marketing' },
          { value: 234, name: 'Affiliate Ads' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engine' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    console.log('echarts is ready', echarts);
  }

  function onChartClick(param, echarts) {
    console.log(param, echarts);
    setCount(count + 1);
  };

  function onChartLegendselectchanged(param, echarts) {
    console.log(param, echarts);
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 400, width: '90%', margin: '2% auto' }}
        onChartReady={onChartReady}
        onEvents={{
          'click': onChartClick,
          'legendselectchanged': onChartLegendselectchanged
         }}
      />
      <div>Click Count: {count}</div>
      <div>Open console, see the log detail.</div>
    </>
  );
};

export default PieChart;