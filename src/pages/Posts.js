import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getInfo } from "../redux/actions/userInfoActions";
import {getPosts} from '../redux/actions/postActions'
import { TailSpin } from "react-loader-spinner";
import {
  getProfilesDiamonders,
  getProfilesFiltered,
  getProfilesRepost,
} from "../redux/actions/profilesActions";
import { getProfiles } from "../redux/actions/profilesActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: red[600],
    '&:hover': {
      backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: red[600],
  },
}));

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [coinPrice, setCoinPrice] = useState(0);
  const [like, setLike] = useState(false);
  const [repost, setRepost] = useState(false);
  const [diamond, setDiamond] = useState(false);
  const state = useSelector((state) => state.posts);
  const profileInfo = useSelector((state)=> state.info)
  const user = JSON.parse(localStorage.getItem("identityUsersV2"));
  const public_key = user?.publicKey;

  const headers = {
    PublicKey: public_key,
  };
  useEffect(() => {
    dispatch(getPosts(headers));
    dispatch(getInfo(headers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [public_key]);

  useEffect(() => {
    if (state?.posts?.UserPosts?.Posts) {
      setLoading(false);
    }
    if (!state?.posts?.UserPosts?.Posts) {
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
  const handleClickDiamond = async (body) => {
    await dispatch(getProfilesDiamonders(body));
    navigate("/wheel");
  };
  const handleClickFilter = async (body) => {
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
      localStorage.setItem("hash", body?.PostHashHex);
    } else if (like === false && repost === false && diamond === true) {
      await handleClickDiamond(headersSingle);
      localStorage.setItem("hash", body?.PostHashHex);
    } else {
      await dispatch(getProfilesFiltered(headers));
      localStorage.setItem("hash", body?.PostHashHex);
      navigate("/wheel");
    }
  };
  return (
    <>
      {public_key ? (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{
            minHeight: "100vh",
            width: "50%",
            marginTop: "25px",
            position: "relative",
          }}
        >
          <div
            className="container d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh", flexWrap: "wrap" }}
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
              <div style={{ position: "relative", minHeight: "100vh" }}>
                <h1 style={{ color: "white", marginBottom: "15px" }}>
                  You can simply{" "}
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    make a wheel draw
                  </span>{" "}
                  among the post that you filtered.
                </h1>

                {state?.posts?.UserPosts?.Posts?.filter(
                  (x) => x.RecloutedPostEntryResponse === null
                ).map((post, index) => (
                  <div key={index} style={{ paddingBottom: "2rem" }}>
                    <div
                      className="card card-resp"
                      style={{ width: "50vw", marginBottom: "10px" }}
                    >
                      <div
                        className="card-body d-flex"
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <img
                            src={profileInfo?.info?.ProfilePicture}
                            alt="Profile"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50px",
                            }}
                          />
                          <div className="d-flex">
                            <span
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                            >
                              {" "}
                              {profileInfo?.info?.UserName}
                            </span>
                            ~
                            <span
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                            >
                              {" "}
                              ${coinPrice} Coin Price
                            </span>
                          </div>

                          <p
                            className="card-text p-1"
                            style={{ fontSize: "20px" , fontFamily:"'Roboto', sans-serif"}}
                          >
                            {post?.Body}
                          </p>
                          <div
                            className="d-flex align-items-center"
                            style={{
                              borderRadius: "20px",
                              overflow: "hidden",
                              position: "relative",
                              maxHeight: "450px",
                              fontSize: "15px",
                            }}
                          >
                            <img
                              alt=""
                              src={post?.ImageURLs ? post?.ImageURLs[0] : ""}
                              style={{
                                flexShrink: 0,
                                width: "100%",
                                verticalAlign: "middle",
                                borderStyle: "none",
                              }}
                            />
                          </div>
                        </div>
                        <label style={{ fontWeight: "bold", fontSize: "20px" }}>
                          Like{" "}
                          <i
                            className="fas fa-heart"
                            style={{ color: "red" }}
                          ></i>{" "}
                          <GreenSwitch
                            value={like}
                            onChange={() => setLike(!like)}
                          
                          />
                        </label>{" "}
                        <label style={{ fontWeight: "bold", fontSize: "20px" }}>
                          Repost{" "}
                          <i
                            className="fas fa-retweet"
                            style={{ color: "#7800ff " }}
                          ></i>{" "}
                          <Switch
                            value={repost}
                            onChange={() => setRepost(!repost)}
                            color="secondary"
                          />
                        </label>{" "}
                        <label style={{ fontWeight: "bold", fontSize: "20px" }}>
                          Diamond{" "}
                          <i
                            className="far fa-gem"
                            style={{ color: "#006AF9" }}
                          ></i>{" "}
                          <Switch
                            value={diamond}
                            onChange={() => setDiamond(!diamond)}
                          />
                        </label>{" "}
                        <div>
                          <button
                            className="btn btn-danger my-3 p-3"
                            style={{ fontSize: "15px" }}
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
      ) : (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "85vh" }}
        >
          {" "}
          <h1 style={{ fontSize: "6rem", color: "#FFF" }}>
            You Are Not Authorized For This Page Please Login First.
          </h1>{" "}
        </div>
      )}
    </>
  );
};

export default Posts;
