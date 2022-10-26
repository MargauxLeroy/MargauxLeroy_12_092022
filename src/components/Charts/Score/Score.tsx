import React, { useMemo } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

import "./Score.scss";

export default function Score({
  todayScore,
}: {
  todayScore: number | undefined;
}) {
  const userScore = useMemo(() => {
    const score = todayScore;
    if (score != null) {
      return score * 100;
    }
    return 0;
  }, [todayScore]);

  const whitePie = [{ value: 100 }];

  const valuePie = [
    { value: userScore, fill: "#FF0000" },
    { value: 100 - userScore, fill: "transparent", stroke: "none" },
  ];

  return (
    <div className="score child">
      <div className="score-title">
        <h2>Score</h2>
      </div>

      <p className="objective-pourcentage">
        <span>{userScore}%</span>
        <br />
        de votre
        <br />
        objectif
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={whitePie}
            dataKey="value"
            cx="50%"
            cy="50%"
            fill="#fff"
            outerRadius={60}
          />
          <Pie
            data={valuePie}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={70}
            cornerRadius={40}
            style={{ border: "none" }}
            startAngle={90}
            endAngle={450}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
