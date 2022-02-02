import axios from "axios";

export const getInfo = (body) => {
  return (dispatch) => {
    axios
      .post(
        "https://api-diamondapp-likes-on-posts.herokuapp.com/API/GET_USER_INFO",
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