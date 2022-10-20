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

// import styled from "styled-components";

import "./AverageSessions.scss";

export default function AverageSessions() {
  // const ReferenceBand = ({ cx }) => {
  //     return (
  //         <rect
  //             x={cx}
  //             y={0}
  //             width="100%"
  //             height="100%"
  //             fill={"black"}
  //             fillOpacity={0.2}
  //         />
  //     )
  // }

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
    const { points, width, height } = props;
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
          data={data}
          margin={{
            top: 64,
            bottom: 5,
            left: 15,
            right: 15,
          }}
        >
          <XAxis
            dataKey="days"
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
            dataKey="sessionTime"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            //   activeDot={() => }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const data = [
  {
    days: "L",
    sessionTime: 4000,
    amt: 2400,
  },
  {
    days: "M",
    sessionTime: 3000,
    amt: 2210,
  },
  {
    days: "M",
    sessionTime: 2000,
    amt: 2290,
  },
  {
    days: "J",
    sessionTime: 2780,
    amt: 2000,
  },
  {
    days: "V",
    sessionTime: 1890,
    amt: 2181,
  },
  {
    days: "S",
    sessionTime: 2390,
    amt: 2500,
  },
  {
    days: "D",
    sessionTime: 3490,
    amt: 2100,
  },
];
