import axios from "axios";

export const getProfiles = (body) => {
  return (dispatch) => {
    axios
      .post(
        "https://deso-wheel.herokuapp.com/api/get-users-who-liked-post",
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


export const getProfilesRepost = (body) => {
  return (dispatch) => {
    axios
      .post(
        "https://deso-wheel.herokuapp.com/api/get-users-who-re-posted-any-post",
        body
      )
      .then((resp) =>
        dispatch({
          type: "GET_PROFILES_REPOST",
          payload: resp.data,
        })
      );
  }
}