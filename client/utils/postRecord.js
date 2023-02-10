const postRecord = async (hash, text) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ hash, text }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`http://localhost:3003/`, requestOptions);
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.error);
  }
  console.log("Response from server: : ", data);
};
export default postRecord;
