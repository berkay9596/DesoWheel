import React, { useEffect } from "react";
import BitcloutLogin from "react-bitclout-login";
const DesoLogin = () => {
  const responseClout = async (response) => {
    const publicKey = await response.publicKey;
    console.log(response);
    await localStorage.setItem("publicKey", publicKey);
  };

  useEffect(() => {
    responseClout();
  }, []);
  const accessLevel = 4;
  const JWT = true;
  return (
    <div>
      <BitcloutLogin
        accessLevel={accessLevel}
        onSuccess={responseClout}
        onFailure={responseClout}
        JWT={JWT}
        customText="Login with Bitclout"
      />
    </div>
  );
};

export default DesoLogin;
