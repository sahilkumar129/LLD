import { DataSource, DataSourceOptions } from "typeorm";

export class PostgresDb {
  private static db;
  public static createConnection() {
    let rootDir = "";
    if (process.env.NODE_ENV !== "DEV") rootDir = "build/";
    const connectionOptions: DataSourceOptions = {
      type: "postgres",
      host: process.env.TYPEORM_HOST,
      port: +process.env.PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: "habit",
      schema: process.env.TYPEORM_SCHEMA,
      entities: [rootDir + "src/entities/*{.ts,.js}"],
    };
    const dataSource = new DataSource(connectionOptions);
    dataSource
      .initialize()
      .then((connection) => {
        console.log("Postgres DB connection created");
        PostgresDb.setDb(connection);
      })
      .catch((error) => {
        console.error("Error during postgres DB creation", JSON.stringify(error));
      });
  }

  public static getDb() {
    return PostgresDb.db;
  }

  public static setDb(db) {
    PostgresDb.db = db;
  }
}
