import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "5k", value: 20 },
  { name: "10k", value: 40 },
  { name: "15k", value: 35 },
  { name: "20k", value: 90 }, // Peak Point
  { name: "25k", value: 50 },
  { name: "30k", value: 45 },
  { name: "35k", value: 20 },
  { name: "40k", value: 60 },
  { name: "45k", value: 70 },
  { name: "50k", value: 55 },
  { name: "55k", value: 40 },
  { name: "60k", value: 45 }
];

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
        <XAxis dataKey="name" stroke="#A0AEC0" />
        <YAxis stroke="#A0AEC0" />
        <Tooltip contentStyle={{ backgroundColor: "#1E293B", borderRadius: "8px", color: "#FFFFFF" }} />
        <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4, fill: "#3B82F6" }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
