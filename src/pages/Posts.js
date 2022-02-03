import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getInfo } from "../redux/actions/userInfoActions";
import { TailSpin } from "react-loader-spinner";
import { getProfilesRepost } from "../redux/actions/profilesActions";
import { getProfiles } from "../redux/actions/profilesActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import axios from "axios";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [coinprice, setCoinPrice] = useState(0);
  const state = useSelector((state) => state.info);
  const public_key = localStorage.getItem("publicKey");
  const headers = {
    public_key: public_key,
  };
  useEffect(() => {
    dispatch(getInfo(headers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [public_key]);

  useEffect(() => {
    if (state?.info?.UserPosts?.Posts) {
      setLoading(false);
    }
    if (!state?.info?.UserPosts?.Posts) {
      return setLoading(true);
    }
  }, [state]);

  // const body = {
  //   publicKey: public_key,
  // };
  // const getCoinPrice = () => {
  //   return axios
  //     .post("https://api-diamondapp-likes-on-posts.herokuapp.com/API/GET_USER_COIN_PRICE",
  //       body
  //     )
  //     .then((resp) => console.log(resp));
  // };
  // useEffect(() => {
  //   getCoinPrice();
  // }, []);
  const handleClickRepost = async (body) => {
    console.log(body);
    const headers = {
      post_url: `https://bitclout.com/nft/${body.PostHashHex}?tab=posts`,
      reader_public_key:
        "BC1YLianxEsskKYNyL959k6b6UPYtRXfZs4MF3GkbWofdoFQzZCkJRB",
    };
    if (body.RepostCount === 0) {
      toast.error("Your post has no reposts");
    } else {
      await dispatch(getProfilesRepost(headers));
      navigate("/wheel");
    }
  };
  const handleClickLike = async (body) => {
    const headers = {
      post_url: `https://bitclout.com/nft/${body.PostHashHex}?tab=posts`,
      reader_public_key:
        "BC1YLianxEsskKYNyL959k6b6UPYtRXfZs4MF3GkbWofdoFQzZCkJRB",
    };
    if (body.LikeCount === 0) {
      toast.error("Your post has no likes");
    } else {
      await dispatch(getProfiles(headers));
      navigate("/wheel");
    }
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "50%", marginTop: "25px" }}
    >
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh", flexWrap: "wrap" }}
      >
        {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <TailSpin
              heigth="100"
              width="100"
              color="red"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div style={{ height: "100vh" }}>
            <h2>
              You can simply click on the buttons to{" "}
              <span style={{ fontWeight: "bold" }}>make a wheel draw</span>{" "}
              among the post that you clicked.
            </h2>
            {state?.info?.UserPosts?.Posts?.map((post, index) => (
              <div key={index}>
                <div className="card" style={{ width: "50vw" }}>
                  <div
                    className="card-body d-flex"
                    style={{ flexDirection: "column" }}
                  >
                    <img
                      src={state?.info?.ProfilePicture}
                      alt="Profile"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      {state?.info?.UserName}
                    </span>
                    <p className="card-text">{post?.Body}</p>
                    <img
                      alt=""
                      src={post?.ImageURLs ? post?.ImageURLs[0] : ""}
                      style={{ width: "33%", marginBottom: "5px" }}
                    />
                    <div>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={() => handleClickRepost(post)}
                      >
                        Reposts ({post?.RecloutCount}){" "}
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleClickLike(post)}
                      >
                        Likes ({post?.LikeCount})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
