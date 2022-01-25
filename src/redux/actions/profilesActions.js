import axios from "axios";

export const getProfiles = (body) => {
  return (dispatch) => {
    axios
      .post(
        "https://my-first-bitclout-api.herokuapp.com/API/GET_USERS_WHO_LIKED_POST",
        body
      )
      .then((resp) =>
        dispatch({
          type: "GET_PROFILES",
          payload: resp.data,
        })
      );
  };
};
