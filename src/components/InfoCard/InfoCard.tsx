import React from "react";
import "./InfoCard.scss";

type InfoCardProps = {
  value: number | undefined;
  title: string;
  icon: string;
};

export function InfoCard({ value, title, icon }: InfoCardProps) {
  return (
    <div className="info-card">
      <img src={icon} alt="" />
      <div>
        <h3>{value === undefined ? "Inconnu" : value.toString()}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}
