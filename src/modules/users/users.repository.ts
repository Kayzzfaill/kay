import { Database } from "bun:sqlite";

export class UsersRepository {
  constructor(private readonly database: Database) {}

  public init(): void {
    this.database.run(
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        email TEXT NOT NULL
        password TEXT NOT NULL
      );
      ); 
}
public findById(id: number): UserType | null {
  return this.database
    .query<UserType, {$email: string }>("SELECT * FROM users WHERE id= $id")
    .get({ $id: id });
  
}
