import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { diaryRecordsRoutes } from "./config/routes/diary_records.js";

mongoose.set("strictQuery", false);

await mongoose.connect("mongodb://localhost/diary");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/", diaryRecordsRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
