import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(process.env.PORT_CONNECTION, () => {
  console.log(`Server is running on port ${process.env.PORT_CONNECTION}!`);
});

app.use("/api/user", userRoutes);
