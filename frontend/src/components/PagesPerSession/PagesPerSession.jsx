import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PagesPerSession = ({ data }) => {
  if (!data) return null;

  const chartData = data.map((item) => ({
    date: item.date,
    pagesPerSession: item.pages_per_session,
  }));

  return (
    <div>
      <h4>Pages per Session Comparison</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="pagesPerSession"
            stroke="#ff7f0e"
            fill="#ff7f0e"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesPerSession;
