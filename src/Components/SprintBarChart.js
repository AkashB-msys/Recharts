import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import barChart from "../Mockdata/barChart.json";

const SprintBarChart = () => {
  return (
    <div>
      <h3 className="taskname">Bar Chart</h3>
      <BarChart width={730} height={500} data={barChart}>
        <CartesianGrid />
        <XAxis
          dataKey="name"
          label={{
            value: "Sprint",
            position: "insideBottomRight",
            dy: 15,
          }}
        ></XAxis>
        <YAxis
          label={{
            value: "Stay Point(SP)",
            position: "insideLeft",
            angle: -90,
            dy: -10,
          }}
        ></YAxis>
        <Tooltip />
        <Bar
          dataKey="value3"
          stackId="1"
          fill="rgb(160, 160, 160)"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey="value1"
          stackId="1"
          fill="rgb(104, 104, 104)"
          radius={[20, 20, 0, 0]}
        />

        <Bar
          dataKey="value2"
          stackId="2"
          fill="rgb(64, 64, 64)"
          radius={[20, 20, 0, 0]}
        />

        <Bar
          dataKey="value4"
          stackId="1"
          fill="rgb(220, 220, 220)"
          radius={[20, 20, 0, 0]}
        />
        <Legend />
      </BarChart>
    </div>
  );
};

export default SprintBarChart;
