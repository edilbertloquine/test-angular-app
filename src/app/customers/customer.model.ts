export class Customer {
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public tier: string;
  public gender: string;
  public createdAt: Date

  constructor(firstName: string, lastName: string, username: string, email: string, tier: string, gender: string, createdAt: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.tier = tier;
    this.gender = gender;
    this.createdAt = createdAt
  }
}
