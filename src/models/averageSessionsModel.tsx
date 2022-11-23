export class AverageSessionsModel {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];

  constructor(
    userId: number,
    sessions: {
      day: number;
      sessionLength: number;
    }[]
  ) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
