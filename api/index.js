import express from "express";
import mongoose from "mongoose";
//import { PORT, mongoDBURL } from "./config.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();

const PORT = process.env.APP_PORT;
const mongoDBURL = process.env.mongoDBURL;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/api/user', userRouter);
