import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DesoPrice = () => {
  const [rate, setRate] = useState([]);
  const body = {
    currency: "USD",
    code: "DESO",
    meta: true,
  };
  const headers = {
    headers: {
      "content-type": "application/json",
      "x-api-key": "1ad7297b-df8b-46b1-b87f-260d49ddd23d",
    },
  };
  const getReq = async () => {
    return await axios
      .post("https://api.livecoinwatch.com/coins/single", body,headers)
      .then((resp) => setRate(resp.data));
  };

  useEffect(() => {
    getReq();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

  return (
    <div>
      <img src={rate?.png32} alt="deso price" /> ${rate?.rate?.toFixed(2)}
    </div>
  );
};

export default DesoPrice;
