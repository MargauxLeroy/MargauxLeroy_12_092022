import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { Activity } from "../../../models/activityModel";

import "./DailyActivity.scss";

export default function DailyActivity({
  activityData,
}: {
  activityData: Activity | undefined;
}) {
  const sessions = activityData?.sessions || [];
  const data = sessions;

  const minKg = Math.min(...sessions.map((e) => e.kilogram));
  const maxKg = Math.max(...sessions.map((e) => e.kilogram));

  const minKcal = Math.min(...sessions.map((e) => e.calories));
  const maxKcal = Math.max(...sessions.map((e) => e.calories));

  const formatedData = data.map((s) => ({ ...s, day: s.day.substring(9, 10) }));

  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p> {`${payload[0].value} kg`}</p>
          <p> {`${payload[1].value} kCal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="main-graph">
      <div className="main-graph-title">
        <h2>Activité quotidienne</h2>
        <div className="legend">
          <div>
            <span></span>
            <p>kilogram (kg)</p>
          </div>
          <div>
            <span></span>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="76%">
        <BarChart width={500} height={300} data={formatedData}>
          <CartesianGrid
            stroke="#DEDEDE"
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />

          <XAxis
            dataKey="day"
            stroke="#DEDEDE"
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            tickLine={false}
            dy={10}
          />

          <YAxis
            dataKey="kilogram"
            yAxisId={"kilogram"}
            domain={[minKg - 2, maxKg + 2]}
            orientation="right"
            stroke="#9B9EAC"
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            dataKey="calories"
            yAxisId={"calories"}
            domain={[minKcal - 50, maxKcal + 50]}
            orientation="left"
            stroke="#9B9EAC"
            tick={false}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            cursor={{ fill: "#C4C4C450" }}
            content={<CustomTooltip />}
            wrapperStyle={{
              background: "#E60000",
              color: "white",
              textAlign: "center",
              padding: "24px 12px",
              outline: "none", /// Remove random border
            }}
          />

          <Bar
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282d30"
            radius={[10, 10, 0, 0]}
            barSize={7}
            unit="kg"
          />

          <Bar
            dataKey="calories"
            yAxisId="calories"
            fill="#e60000"
            radius={[10, 10, 0, 0]}
            barSize={7}
            unit="kCal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
