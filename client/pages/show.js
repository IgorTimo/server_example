import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getRecordByHash from "../utils/getRecordByHash";

const RecordPage = ({ hash }) => {
  const [text, setText] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!hash) {
      router.push("/");
      return;
    }
    (async () => {
      try {
        const record = await getRecordByHash(hash);
        setText(record.text);
      } catch (error) {
        console.error(error);
        setText("Не нашлась :(");
      }
    })();
  }, []);
  return (
    <div>
      <Link href="/">{`<- На главную`}</Link>
      <h4> Record with hash {hash}</h4>
      <p>{text}</p>
    </div>
  );
};

export default RecordPage;

export async function getServerSideProps(context) {
  const hash = context?.query?.hash;
  if (!hash) {
    return { props: {} };
  }
  return {
    props: { hash }, // will be passed to the page component as props
  };
}
