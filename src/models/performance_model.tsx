export class Performance {
  userId: number;
  // kind: {};
  data: {
    value: number;
    kind: number;
  };

  constructor(
    userId: number,
    data: {
      value: number;
      kind: number;
    }
  ) {
    this.userId = userId;
    this.data = data;
  }
}
