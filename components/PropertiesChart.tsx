import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Properties',
    Buy: 50,
    Rent: 30,
  },
];

const PropertiesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Buy" fill="#8884d8" />
        <Bar dataKey="Rent" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PropertiesChart;
