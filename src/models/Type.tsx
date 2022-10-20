export type User = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

export type Activity = {
  userId: number;
  sessions: _Session[];
};

type _Session = {
  day: string;
  kilogram: number;
  calories: number;
};

export type Performance = {
  userId: number;
  kind: {};
  data: _PerformanceData[];
};

type _PerformanceData = {
  value: number;
  kind: number;
};

export type AverageSessions = {
  userId: number;
  sessions: _AverageSession[];
};

type _AverageSession = {
  day: number;
  sessionLength: number;
};
