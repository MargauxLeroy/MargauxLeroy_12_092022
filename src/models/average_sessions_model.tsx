export class AverageSessions {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  };

  constructor(userId: number, day: number, sessionLength: number) {
    this.userId = userId;
    this.sessions = {
      day,
      sessionLength,
    };
  }
}
