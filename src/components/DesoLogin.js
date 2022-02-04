import React, { useEffect } from "react";
import BitcloutLogin from "react-bitclout-login";
import { useDispatch } from "react-redux";
import { getInfo } from '../redux/actions/userInfoActions'
import { makeStyles } from '@material-ui/core/styles';
import { CgProfile } from 'react-icons/cg';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    backgroundColor: "#0056B3",
    textTransform: 'none',
    fontWeight: "bold",
    color: '#FFF',
    '&:hover': {
      color: "black",
      backgroundColor: "white"
    },
    borderRadius: "10px",
    padding: "0.7rem",
    width: "150px",
    letterSpacing: "3px"
  },
}));

const DesoLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const responseClout = async (response) => {
    if (response) {
      const publicKey = await response.publicKey;
      console.log(response);
      await localStorage.setItem("publicKey", publicKey);
      const public_key = localStorage.getItem('publicKey');
      const headers = {
        PublicKey: public_key,
      };
      dispatch(getInfo(headers))
    }
  };

  useEffect(() => {
    responseClout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        customText="Login"
        customization={{ className: classes.loginButton }}
        customIcon={<CgProfile />}
      />
    </div>
  );
};

export default DesoLogin;
