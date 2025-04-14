import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const CustomizedDot = ({ cx, cy, value }) => {
  const isHigh = value > 2500;
  return (
    <svg x={cx - 10} y={cy - 10} width={20} height={20} fill={isHigh ? 'red' : 'green'} viewBox="0 0 1024 1024">
      <circle cx="512" cy="512" r="400" />
    </svg>
  );
};

const LineChartt = ({ height = 400, showtittle = true }) => (
  <>
    {showtittle && (
      <h2 style={{ fontWeight: '900', marginLeft: '3%' }}>Line Chart </h2>

    )}
    <ResponsiveContainer width="90%" height={height} style={{ margin: '5% auto' }}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={(props) => <CustomizedDot {...props} />} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </>
);

export default LineChartt;
