import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
  Legend,
} from "recharts";
import { Button, Modal } from "@mui/material";

const TrafficSources = ({ data }) => {
  const [showDateWise, setShowDateWise] = useState(false);
  const [selectedDateData, setSelectedDateData] = useState(null);

  if (!data) return null;

  const totalTraffic = { direct: 0, organicSearch: 0, referral: 0, social: 0 };
  data.forEach((item) => {
    totalTraffic.direct += item.traffic_sources.direct;
    totalTraffic.organicSearch += item.traffic_sources.organic_search;
    totalTraffic.referral += item.traffic_sources.referral;
    totalTraffic.social += item.traffic_sources.social;
  });

  const totalDays = data.length;
  const averageTraffic = {
    direct: parseFloat((totalTraffic.direct / totalDays).toFixed(1)),
    organicSearch: parseFloat(
      (totalTraffic.organicSearch / totalDays).toFixed(1)
    ),
    referral: parseFloat((totalTraffic.referral / totalDays).toFixed(1)),
    social: parseFloat((totalTraffic.social / totalDays).toFixed(1)),
  };

  const overallChartData = [
    { name: "Direct", value: averageTraffic.direct },
    { name: "Organic Search", value: averageTraffic.organicSearch },
    { name: "Referral", value: averageTraffic.referral },
    { name: "Social", value: averageTraffic.social },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f0e"];

  const handleClick = (data, index) => {
    const selectedDate = data[index].name;
    const selectedDateData = data.find((item) => item.date === selectedDate);
    setSelectedDateData(selectedDateData);
  };

  return (
    <div>
      <h4>Traffic Sources Comparison</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart
          onClick={(data, index) => handleClick(overallChartData, index)}
        >
          <Pie
            data={overallChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(2)}%`
            }
          >
            {overallChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <Button
        onClick={() => setShowDateWise(true)}
        sx={{
          bgcolor: "#8884d8",
          color: "white",
          "&:hover": {
            bgcolor: "#bcc8ff",
          },
        }}
      >
        Show Date-wise Data
      </Button>

      <Modal
        open={showDateWise}
        onClose={() => setShowDateWise(false)}
        aria-labelledby="date-wise-modal"
        aria-describedby="date-wise-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            width: "70%",
            maxHeight: "70%",
            overflowY: "auto",
          }}
        >
          <h4>Date-wise Data</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-GB")
                }
              />
              <YAxis />
              <Bar dataKey="traffic_sources.direct" fill="#8884d8" />
              <Bar dataKey="traffic_sources.organic_search" fill="#82ca9d" />
              <Bar dataKey="traffic_sources.referral" fill="#ffc658" />
              <Bar dataKey="traffic_sources.social" fill="#ff7f0e" />
              <BarTooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Modal>
    </div>
  );
};

export default TrafficSources;
