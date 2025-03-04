import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2015", sales: 25, profit: 0},
  { year: "2016", sales: 65, profit: 60 },
  { year: "2017", sales: 50, profit: 40 },
  { year: "2018", sales: 75, profit: 60 },
  { year: "2019", sales: 100, profit: 90 },
];

const SalesAnalytics = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
        <XAxis dataKey="year" stroke="#A0AEC0" />
        <YAxis stroke="#A0AEC0" />
        <Tooltip contentStyle={{ backgroundColor: "#1E293B", color: "#FFFFFF" }} />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#3B82F6"
          strokeWidth={2}
          dot={{ r: 4, fill: "#3B82F6" }}
        />
        <Line
          type="monotone"
          dataKey="profit"
          stroke="#10B981"
          strokeWidth={2}
          dot={{ r: 4, fill: "#10B981" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesAnalytics;
