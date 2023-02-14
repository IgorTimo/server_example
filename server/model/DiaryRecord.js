import mongoose from "mongoose";

const Schema = mongoose.Schema;

const diaryRecord = new Schema({
  text: String,
  hash: String,
});

export const DiaryRecord = new mongoose.model("DiaryRecord", diaryRecord);
