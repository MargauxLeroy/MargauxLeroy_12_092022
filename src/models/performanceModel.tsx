export type Kind = {
  "1": "cardio";
  "2": "energy";
  "3": "endurance";
  "4": "strength";
  "5": "speed";
  "6": "intensity";
};

export class PerformanceModel {
  userId: number;
  kind: Kind;
  data: {
    value: number;
    kind: number;
  }[];

  constructor(
    userId: number,
    kind: Kind,
    data: {
      value: number;
      kind: number;
    }[]
  ) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}
