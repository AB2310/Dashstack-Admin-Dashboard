import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Data for Sales and Profit
const data = [
  { name: "5k", sales: 70, profit: 30 },
  { name: "10k", sales: 60, profit: 50 },
  { name: "15k", sales: 40, profit: 70 },
  { name: "20k", sales: 20, profit: 65 }, // Peak Point
  { name: "25k", sales: 80, profit: 40 },
  { name: "30k", sales: 65, profit: 65 },
  { name: "35k", sales: 25, profit: 10 },
  { name: "40k", sales: 100, profit: 60 },
  { name: "45k", sales: 90, profit: 70 },
  { name: "50k", sales: 60, profit: 75 },
  { name: "55k", sales: 40, profit: 95 },
  { name: "60k", sales: 45, profit: 90 },
];

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
        <XAxis dataKey="name" stroke="#A0AEC0" />
        <YAxis stroke="#A0AEC0" />
        <Tooltip contentStyle={{ backgroundColor: "#1E293B", borderRadius: "8px", color: "#FFFFFF" }} />

        {/* Sales Area */}
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#A78BFA" // Purple color for Sales
          fill="rgba(167, 139, 250, 0.5)" // Light Purple fill
          strokeWidth={2}
        />

        {/* Profit Area */}
        <Area
          type="monotone"
          dataKey="profit"
          stroke="#F97316" // Orange color for Profit
          fill="rgba(249, 115, 22, 0.5)" // Light Orange fill
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
