import axios from "axios";

export const getPosts = (body) => {
    return (dispatch) => {
      axios
        .post("https://deso-wheel.herokuapp.com/api/get-users-posts", body)
        .then((resp) =>
          dispatch({
            type: "GET_POSTS",
            payload: resp.data,
          })
        );
    };
  };
  