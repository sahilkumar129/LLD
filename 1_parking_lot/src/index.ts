import express from "express";
const app = express();
import { initialize } from "./controllers";
const port = 3000;

initialize(app);
app.listen(port, () => console.log("Server started on port", port));
