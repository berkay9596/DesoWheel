import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import desologo from "../assets/desologo.png";

const DesoPrice = () => {
  const [rate, setRate] = useState([]);

  const getReq = () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitclout&vs_currencies=usd"
      )
      .then((resp) => setRate(resp.data));
  };
  useEffect(() => {
    getReq();
  }, []);

  return (
    <div>
      <img src={desologo} style={{ width: "2rem" }} alt="Deso logo" />$
      {rate?.bitclout?.usd}
    </div>
  );
};

export default DesoPrice;
