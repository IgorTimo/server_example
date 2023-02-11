import diary from "../../../abi/diary";

export default async function handler(req, res) {
  try {
    const hashsOfRecords = await diary.getHashsOfRecords();
    res.status(200).json({ list: hashsOfRecords });
  } catch (error) {
    res.status(404).send({ error: error });
  }
}
