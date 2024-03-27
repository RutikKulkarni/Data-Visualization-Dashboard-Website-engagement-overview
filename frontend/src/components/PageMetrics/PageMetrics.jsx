import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

const PageMetrics = ({ data }) => {
  if (!data) return null;

  const chartData = data.map((item) => ({
    date: format(new Date(item.date), "dd-MM-yy"),
    pageViews: item.page_views,
    pageSession: item.pages_per_session,
    avgTime: item.average_time_on_page,
    avgSession: item.average_session_duration,
  }));

  return (
    <div>
      <h4>Page Metrics Comparison</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            yAxisId="left"
            label={{ value: "Count", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: "Time (s)", angle: -90, position: "insideRight" }}
          />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pageViews" barSize={20} fill="#8884d8" />
          <Bar
            yAxisId="left"
            dataKey="pageSession"
            barSize={20}
            fill="#82ca9d"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="avgTime"
            stroke="#ffc658"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="avgSession"
            stroke="#ff7f0e"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageMetrics;
