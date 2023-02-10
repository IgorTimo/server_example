import getDiaryWithSigner from "../abi/diaryWithSigner";

const addRecord = async (hash) => {
  const diaryWithSigner = await getDiaryWithSigner();
  const tx = await diaryWithSigner.addRecord(hash);
  const response = await tx.wait();
  console.log("Response from blockchain: ", response);
};

export default addRecord;
