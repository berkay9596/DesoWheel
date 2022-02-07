import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getInfo } from "../redux/actions/userInfoActions";
import { TailSpin } from "react-loader-spinner";
import {
  getProfilesFiltered,
  getProfilesRepost,
} from "../redux/actions/profilesActions";
import { getProfiles } from "../redux/actions/profilesActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import FilterPostModal from "../components/FilterPostModal";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [coinPrice, setCoinPrice] = useState(0);
  const [like, setLike] = useState(false);
  const [repost, setRepost] = useState(false);
  const [diamond, setDiamond] = useState(false);
  const state = useSelector((state) => state.info);
  console.log("state", state);
  const identity = localStorage.getItem("identityUsersV2");
  console.log(",identity", identity);
  const public_key = identity["publicKey"];
  console.log("pubblickKey", public_key);
  const headers = {
    PublicKey: public_key,
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

  const body = {
    PublicKey: public_key,
  };
  const getCoinPrice = () => {
    return axios
      .post("https://deso-wheel.herokuapp.com/api/get-users-coin-price", body)
      .then((resp) => setCoinPrice(resp.data.coinPrice));
  };
  useEffect(() => {
    getCoinPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClickRepost = async (body) => {
    await dispatch(getProfilesRepost(body));
    navigate("/wheel");
  };
  const handleClickLike = async (body) => {
    await dispatch(getProfiles(body));
    navigate("/wheel");
  };
  const handleClickFilter = async (body) => {
    console.log("heş", body?.PostHashHex);
    const headers = {
      PostUrl: `https://bitclout.com/posts/${body?.PostHashHex}?tab=posts`,
      ReaderPublicKey:
        "BC1YLiCaF8wLPve9Rhj1pp2QFJeC73sBET5fKt1ZrrQTAAis2tL11Zj",
      IsLiker: like,
      IsRePoster: repost,
      IsDiamondSender: diamond,
    };
    const headersSingle = {
      PostUrl: `https://bitclout.com/posts/${body?.PostHashHex}?tab=posts`,
      ReaderPublicKey:
        "BC1YLiCaF8wLPve9Rhj1pp2QFJeC73sBET5fKt1ZrrQTAAis2tL11Zj",
    };
    if (like === true && repost === false && diamond === false) {
      await handleClickLike(headersSingle);
      localStorage.setItem("hash", body?.PostHashHex);
    } else if (like === false && repost === true && diamond === false) {
      await handleClickRepost(headersSingle);
    } else if (like === false && repost === false && diamond === true) {
      await alert("diamond tekil isteği");
    } else {
      await dispatch(getProfilesFiltered(headers));
      navigate("/wheel");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "92vh", width: "50%", marginTop: "25px" }}
    >
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "92vh", flexWrap: "wrap" }}
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
          <div>
            <h2>
              You can simply{" "}
              <span style={{ fontWeight: "bold" }}>make a wheel draw</span>{" "}
              among the post that you clicked.
            </h2>
            {state?.info?.UserPosts?.Posts?.map((post, index) => (
              <div key={index}>
                <div
                  className="card card-resp"
                  style={{ width: "50vw%", marginBottom: "10px" }}
                >
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
                    <div className="d-flex">
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {state?.info?.UserName}
                      </span>
                      ~
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        ${coinPrice} Coin Price
                      </span>
                    </div>
                    <p className="card-text">{post?.Body}</p>
                    {
                      (0,
                      post?.RecloutedPostEntryResponse !== null ? (
                        <div className="card-text">
                          <span style={{ fontWeight: "bold", color: "red" }}>
                            {" "}
                            Reposted post{" "}
                          </span>
                          <p className="card-text">
                            {" "}
                            {post?.RecloutedPostEntryResponse?.Body}
                          </p>
                        </div>
                      ) : (
                        ""
                      ))
                    }
                    <img
                      alt=""
                      src={post?.ImageURLs ? post?.ImageURLs[0] : ""}
                      style={{ width: "50%", marginBottom: "5px" }}
                    />
                    <img
                      src={
                        post?.RecloutedPostEntryResponse !== null
                          ? post?.RecloutedPostEntryResponse?.ImageURLs
                          : ""
                      }
                      style={{ width: "50%", marginBottom: "5px" }}
                    />
                    <label>Like</label>{" "}
                    <input
                      type="checkbox"
                      value={like}
                      onChange={() => setLike(!like)}
                    />
                    <br />
                    <label>Repost</label>{" "}
                    <input
                      type="checkbox"
                      value={repost}
                      onChange={() => setRepost(!repost)}
                    />
                    <br />
                    <label>Diamond</label>{" "}
                    <input
                      type="checkbox"
                      value={diamond}
                      onChange={() => setDiamond(!diamond)}
                    />
                    <div>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => handleClickFilter(post)}
                      >
                        Filter the post
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
