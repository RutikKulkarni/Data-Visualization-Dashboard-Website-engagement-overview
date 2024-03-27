import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

const ComposedResponsiveContainer = ({ children }) => (
  <ResponsiveContainer width="100%" height={300}>
    {children}
  </ResponsiveContainer>
);

const SocialReferrals = ({ data }) => {
  if (!data) return null;

  const chartData = data.map((item) => ({
    date: format(new Date(item.date), "dd-MM-yy"),
    facebook: item.social_referrals.facebook,
    twitter: item.social_referrals.twitter,
    linkedin: item.social_referrals.linkedin,
    other: item.social_referrals.other,
  }));

  return (
    <div>
      <h4>Social Referrals Comparison</h4>
      <ComposedResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="facebook" stackId="b" fill="#8884d8" />
          <Bar dataKey="twitter" stackId="b" fill="#82ca9d" />
          <Bar dataKey="linkedin" stackId="b" fill="#ffc658" />
          <Bar dataKey="other" stackId="b" fill="#ff7f0e" />
        </BarChart>
      </ComposedResponsiveContainer>
    </div>
  );
};

export default SocialReferrals;
