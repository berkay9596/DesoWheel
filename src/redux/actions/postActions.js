import axios from "axios";
import { toast } from "react-toastify";

export const getPosts = (body) => {
    return (dispatch) => {
      axios
        .post("https://fastapi-on-koyeb-desowheel.koyeb.app/api/get-users-posts", body)
        .then((resp) =>
          dispatch({
            type: "GET_POSTS",
            payload: resp.data,
          })
        ).catch((e) => toast.error(e.response.data.detail));
    };
  };
  