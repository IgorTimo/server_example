import express from "express";
import { DiaryRecordController } from "../../controllers/DiaryRecordController.js";

export const diaryRecordsRoutes = express.Router();

diaryRecordsRoutes.get("/", async (req, res) => {
  DiaryRecordController.getAllRecords(req, res);
});

diaryRecordsRoutes.get("/get_record_by_hash/:hash", async (req, res) => {
  DiaryRecordController.getRecordByHash(req, res);
});

diaryRecordsRoutes.post("/", async (req, res) => {
  DiaryRecordController.addRecord(req, res);
});
