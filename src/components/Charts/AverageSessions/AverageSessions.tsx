import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  Rectangle,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { AverageSessionsModel } from "../../../models/averageSessionsModel";

import "./AverageSessions.scss";

export default function AverageSessions({
  averageSessionsData,
}: {
  averageSessionsData: AverageSessionsModel | undefined;
}) {
  const data = averageSessionsData?.sessions;
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  const formatedData = data?.map((data) => {
    return {
      day: days[data.day - 1],
      sessionLength: data.sessionLength,
    };
  });

  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "12px",
            fontSize: "10px",
          }}
        >
          <p> {`${payload[0].value}min`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomCursor = (props: any) => {
    const { points, width } = props;
    const { x } = points[0];
    return (
      <Rectangle
        fill="black"
        opacity="0.1"
        x={x}
        width={width + 30}
        height={500}
      />
    );
  };

  return (
    <div className="average-sessions child">
      <div className=" average-sessions-title">
        <h2>Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // width={500}
          // height={300}
          data={formatedData}
          margin={{
            top: 64,
            bottom: 5,
            left: 15,
            right: 15,
          }}
        >
          <XAxis
            dataKey="day"
            tick={{ fill: "#FFFFFF", fontSize: 14, opacity: 0.5 }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            labelFormatter={() => ""} /// Permet de ne pas avoir de label
            cursor={<CustomCursor />}
            content={<CustomTooltip />}
            contentStyle={{
              border: "none",
              textAlign: "center",
              color: "black",
              background: "white",
            }}
            wrapperStyle={{
              outline: "none", // Remove random border
            }}
          />

          <Line
            unit="min"
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
