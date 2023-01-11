import express from "express";
import { Application } from "express";
import { initialize } from "./controllers";
import { DBFactory } from "./db/db.factory";

export class App {
  public port: number;
  public app: Application;

  constructor(config: { port: number; middlewares: any }) {
    this.dbConnection();
    this.app = express();
    this.port = config.port;
    this.addMiddlewares(config.middlewares);
    this.initializeRoutes();
  }

  private dbConnection() {
    DBFactory.getDb().createConnection();
  }

  private addMiddlewares(middlewares: any) {
    middlewares.forEach((middleware) => this.app.use(middleware));
  }

  private initializeRoutes() {
    initialize(this.app);
  }

  public listen() {
    this.app.listen();
  }
}
