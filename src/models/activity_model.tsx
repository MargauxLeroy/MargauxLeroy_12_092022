export class Activity {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];

  constructor(
    userId: number,
    sessions: {
      day: string;
      kilogram: number;
      calories: number;
    }[]
  ) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
