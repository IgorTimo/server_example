import diary from "../abi/diary";
import { useEffect, useRef, useState } from "react";
import sha256 from "sha256";
import postRecord from "../utils/postRecord";
import addRecord from "../utils/addRecord";
import { useRouter } from "next/router";

const Index = () => {
  const [hashsOfRecords, setHashesOfRecords] = useState([]);
  const recordRef = useRef();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const hashsOfRecords = await diary.getHashsOfRecords();
        setHashesOfRecords(hashsOfRecords);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const renderHashesOfRecords = hashsOfRecords.map((hash, index) => (
    <li key={index}>{hash}</li>
  ));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = recordRef.current.value;
    const hash = sha256(text);

    try {
      await addRecord(hash);
      await postRecord(hash, text);
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="record">Your record</label>
        <br />
        <textarea
          ref={recordRef}
          name="record"
          rows="8"
          cols="100"
          placeholder="type here ..."
        />
        <br />
        <button>Make record</button>
      </form>
      <h1>My records</h1>
      <ol>{renderHashesOfRecords}</ol>
    </div>
  );
};

export default Index;
