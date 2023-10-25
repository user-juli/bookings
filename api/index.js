import express from "express";
import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
