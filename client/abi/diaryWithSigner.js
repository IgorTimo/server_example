import diary from "./diary";
import walletProvider from "./walletProvider";

const getDiaryWithSigner = async () => {
  const signer = await walletProvider?.getSigner();
  const diaryWithSigner = diary.connect(signer);
  return diaryWithSigner;
};

export default getDiaryWithSigner;
