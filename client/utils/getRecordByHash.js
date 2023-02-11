const getRecordByHash = async (hash) => {
  const response = await fetch(
    `http://localhost:3003/get_record_by_hash/${hash}`
  );
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.error);
  }
  console.log("Response from server: : ", data);
  return data.record;
};

export default getRecordByHash;
