import React from "react";
import {
  Brush,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const PagePerformance = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div>
      <h4>Page Performance</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="page_views" fill="#8884d8" />
          <Bar dataKey="average_time_on_page" fill="#82ca9d" />
          <Bar dataKey="average_session_duration" fill="#ffc658" />
          <Bar dataKey="pages_per_session" fill="#ff7f0e" />
          <Brush dataKey="date" height={30} stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagePerformance;
