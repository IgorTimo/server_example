import express from "express";
import mongoose from "mongoose";
import cors from "cors";

mongoose.set("strictQuery", false);

await mongoose.connect("mongodb://localhost/diary");

const Schema = mongoose.Schema;

const diaryRecord = new Schema({
  text: String,
  hash: String,
});

const DiaryRecord = new mongoose.model("DiaryRecord", diaryRecord);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", async (req, res) => {
  const records = await DiaryRecord.find();
  if (!records || records.length == 0) {
    return res.status(404).send({ error: "Ничего не найдено" });
  }
  res.send({ records });
});

app.get("/hashs/:hash", async (req, res) => {
  const document = await DiaryRecord.findOne({ hash: req.params.hash });
  if (!document) {
    return res.status(404).send({ error: "Ничего не найдено" });
  }
  res.send({ document });
});

app.post("/", async (req, res) => {
  const { hash, text } = req.body;
  if(!hash || !text){
    return res.status(403).send({ error: "Нужно отправить и хэш и текст." });
  }
  const record = new DiaryRecord({ hash, text });
  try {
    await record.save();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  res.send({ record });
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
