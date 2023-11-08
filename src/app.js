import express from "express";
import db from "./configDb/index.js";

import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Connection Error with db!'));
db.once("open", () => {
  console.log('successfuly connection with db!');
});
const app =  express();

app.use(express.json());

routes(app);

export default app;
