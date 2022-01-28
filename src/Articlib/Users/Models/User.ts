export class User {
  public readonly id: string;
  public readonly username: string;

  constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
  }
}
