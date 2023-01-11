import { LocalDb } from "./local.db";
import { PostgresDb } from "./postgres.db";

export class DBFactory {
  public static getDb() {
    if (process.env.DB === "postgres") return PostgresDb;
    if (process.env.DB === "local") return LocalDb;
  }
}
