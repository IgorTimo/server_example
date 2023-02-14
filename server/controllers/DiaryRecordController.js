import { DiaryRecord } from "../model/DiaryRecord.js";

export class DiaryRecordController {
  static getAllRecords = async (req, res) => {
    const records = await DiaryRecord.find();
    if (!records || records.length == 0) {
      return res.status(404).send({ error: "Ничего не найдено" });
    }
    res.send({ records });
  };

  static getRecordByHash = async (req, res) => {
    try {
      const record = await DiaryRecord.findOne({ hash: req.params.hash });
      if (!record) {
        return res.status(404).send({ error: "Ничего не найдено" });
      }
      res.send({ record });
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  };

  static addRecord = async (req, res) => {
    const { hash, text } = req.body;
    if (!hash || !text) {
      return res.status(403).send({ error: "Нужно отправить и хэш и текст." });
    }
    const record = new DiaryRecord({ hash, text });
    try {
      await record.save();
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
    res.send({ record });
  };
}
