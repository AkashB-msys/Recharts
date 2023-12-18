import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Legend,
  CartesianGrid,
} from "recharts";
import areaChart from "../Mockdata/areaChart.json";

const StreamedAreaChart = () => {
  return (
    <div>
      <h3 className="taskname">Area Chart</h3>
      <AreaChart width={830} height={450} data={areaChart}>
        <XAxis
          dataKey="name"
          label={{
            value: "Hours in AV",
            position: "insideBottomRight",
            dy: 15,
          }}
        ></XAxis>
        <YAxis
          label={{
            value: "Story Point (Days)",
            position: "insideLeft",
            angle: -90,
            dy: -10,
          }}
        ></YAxis>

        <Tooltip />
        <Legend />

        <Area type="basis" dataKey="x" stroke="rgb(90, 90, 90)" fill="rgb(90, 90, 90)" />
        <Area
          type="basis"
          dataKey="y"
          stroke="rgb(138, 135, 135)"
          fill="rgb(138, 135, 135)"
        />
        <Area
          type="basis"
          dataKey="z"
          stroke="rgb(212, 210, 210)"
          fill="rgb(212, 210, 210)"
        />
        <CartesianGrid />
      </AreaChart>
    </div>
  );
};

export default StreamedAreaChart;
