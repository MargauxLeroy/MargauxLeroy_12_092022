import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { Kind, PerformanceModel } from "../../../models/performanceModel";

import "./ActivityType.scss";

export default function ActivityType({
  activityTypeData,
}: {
  activityTypeData: PerformanceModel | undefined;
}) {
  const data = activityTypeData?.data || [];
  const kind = activityTypeData?.kind;

  const formatedData = data.map((data) => {
    const key = data.kind.toString() as keyof Kind;
    return {
      kind: kind?.[key],
      value: data.value,
    };
  });

  return (
    <div className="activity-type child">
      <ResponsiveContainer
        className={"activity-type"}
        width="100%"
        height="100%"
      >
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formatedData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#fff", fontSize: 14 }}
          />
          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
