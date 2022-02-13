import axios from "axios";
import { toast } from "react-toastify";

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
      )
      .catch((e) => toast.error(e.response.data.detail));
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
      )
      .catch((e) => toast.error(e.response.data.detail));
  };
};
export const getProfilesDiamonders = (body) => {
  return (dispatch) => {
    axios
      .post(
        "https://deso-wheel.herokuapp.com/api/get-users-who-sent-diamond-any-post",
        body
      )
      .then((resp) =>
        dispatch({
          type: "GET_PROFILES_DIAMONDS",
          payload: resp.data,
        })
      )
      .catch((e) => toast.error(e.response.data.detail))  ;
  };
};

export const getProfilesFiltered = (body) => {
  return (dispatch) => {
    axios
      .post(
        "https://deso-wheel.herokuapp.com/api/get-users-who-liked-re-posted-diamond-sent",
        body
      )
      .then((resp) =>
        dispatch({
          type: "GET_PROFILES_FILTERED",
          payload: resp.data,
        })
      ).catch((e) => toast.error(e.response.data.detail));
  };
};
