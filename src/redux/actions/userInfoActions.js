import axios from "axios";

export const getInfo = (body) => {
  return (dispatch) => {
    axios
      .post(
        "https://deso-wheel.herokuapp.com/api/get-users-username-and-profile-picture",
        body
      )
      .then((resp) =>
        dispatch({
          type: "GET_INFO",
          payload: resp.data,
        })
      );
  };
};

