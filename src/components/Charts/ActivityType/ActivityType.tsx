import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import "./ActivityType.scss";

//performanceData: Performance
export default function ActivityType() {
  return (
    <div className="activity-type child">
      <ResponsiveContainer
        className={"activity-type"}
        width="100%"
        height="100%"
      >
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#fff", fontSize: 14 }}
          />
          <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

const data = [
  {
    subject: "Intensité",
    A: 80,
    // B: 110,
    // fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 120,
    // B: 130,
    // fullMark: 150,
  },
  {
    subject: "Force",
    A: 140,
    // B: 130,
    // fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 50,
    // B: 100,
    // fullMark: 150,
  },
  {
    subject: "Énergie",
    A: 200,
    // B: 90,
    // fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 90,
    // B: 85,
    // fullMark: 150,
  },
];
