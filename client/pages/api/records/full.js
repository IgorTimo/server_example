export default async function handler(req, res) {
  try {
    const response = await fetch(`http://localhost:3003/`);
    const data = await response.json();
    res.status(200).json({ list: data.records });
  } catch (error) {
    res.status(404).send({ error: error})
  }


  
}
