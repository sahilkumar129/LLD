import * as bodyParser from "body-parser";
import { App } from "./app";
import { errorHandler } from "./middlewares/errorHandler";

const app = new App({
  port: +process.env.PORT,
  middlewares: [bodyParser.json(), errorHandler],
});

app.listen();
