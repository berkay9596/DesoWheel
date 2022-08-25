import React, { createRef } from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import WinnerModal from "../components/WinnerModal";
import { toast } from "react-toastify";
import { clearReduxStoreForPeople } from "../redux/actions/profilesActions";
import { useDispatch } from "react-redux";

import { useScreenshot } from "use-react-screenshot";
import Deso from "deso-protocol";
import DesoApi from "../libs/desoApi";
const Circle3 = () => {
  const [profileNames, setProfileNames] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [durum, setDurum] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.users);

  const [desoApi, setDesoApi] = useState(null);
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);
  const [file, setFile] = useState([]);
  const [publicKey, setSetPublicKey] = useState(null);
  const IdentityUsersKey = "identityUsersV2";
  const [desoSdk, setDesoSdk] = useState(null);

  let url = image;
  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // *** Calling both function ***

  toDataURL(url).then((dataUrl) => {
    // console.log("Here is Base64 Url", dataUrl);
    var fileData = dataURLtoFile(dataUrl, "imageName.jpg");
    // console.log("Here is JavaScript File Object", fileData);
    file.push(fileData);
  });

  useEffect(() => {
    const da = new DesoApi();
    setDesoApi(da);
    let user = {};
    if (localStorage.getItem(IdentityUsersKey) === "undefined") {
      user = {};
    } else if (localStorage.getItem(IdentityUsersKey)) {
      user = JSON.parse(localStorage.getItem(IdentityUsersKey) || "{}");
    }
    if (user.publicKey) {
      setSetPublicKey(user.publicKey);
    }
  }, []);
  const deneme = async () => {
    getImage();
    // const deso = new Deso();
    // const request = undefined;
    // console.log("a");
    // const response = await deso.identity.getJwt(request);
    // console.log("b");
    // console.log("resp", response);

    // const imgPayload = await desoApi.uploadImage(
    //   file[file.length - 1],
    //   publicKey,
    //   response
    // );
    // console.log("imgPayload",imgPayload)
  };
  // imgPayload.ImageURL
  console.log("file", file);
  useEffect(() => {
    if (!mustSpin && durum) {
      deneme();
    }
  }, [mustSpin, durum]);
  const getUserNames = async () => {
    if (state?.profiles?.Likers) {
      const likers = await Object.values(
        state?.profiles?.Likers?.map((liker) => liker.Username)
      );
      console.log("likers", likers);
      setProfileNames(likers);
    } else if (state?.profiles?.Reposters) {
      const reposters = await Object.values(
        state?.profiles?.Reposters?.map((reposter) => reposter.Username)
      );
      setProfileNames(reposters);
    } else if (state?.profiles?.DiamondSenders) {
      const diamonders = await Object.values(
        state?.profiles?.DiamondSenders?.map(
          (diamonders) => diamonders?.DiamondSenderProfile?.Username
        )
      );
      setProfileNames(diamonders);
      console.log("diamonders", diamonders);
    } else if (state?.profiles?.Followers) {
      const followers = await Object.values(
        state?.profiles?.Followers?.map((follower) => follower?.Username)
      );
      setProfileNames(followers);
      console.log("followers", followers);
    } else {
      const filteredProfiles = await Object.values(
        state?.profiles?.map((profile) => profile?.Username)
      );
      setProfileNames(filteredProfiles);
    }
  };
  useEffect(() => {
    if (state?.profiles?.Reposters?.length === 0) {
      toast.error("Your post has 0 repost.");
    }
  }, [state]);

  useEffect(() => {
    if (state?.profiles?.Likers?.length === 0) {
      toast.error("Your post has 0 like.");
    }
  }, [state]);
  useEffect(() => {
    if (state?.profiles?.DiamondSenders?.length === 0) {
      toast.error("Your post has 0 diamonds.");
    }
  }, [state]);

  useEffect(() => {
    getUserNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearReduxStoreForPeople());
    };
  }, [dispatch]);
  const result = profileNames?.map((obj, i) =>
    Object.assign({ option: profileNames[i] })
  );

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * profileNames.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div ref={ref} style={{ height: "91vh" }}>
        {/* <iframe
        title="desoidentity"
        id="identity"
        frameBorder="0"
        src="https://identity.deso.org/embed?v=2"
        style={{
          height: "100vh",
          width: "100vw",
          display: "none",
          position: "fixed",
          zIndex: 1000,
          left: 0,
          top: 0,
        }}
      ></iframe> */}
      {profileNames.length === 0 ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <TailSpin heigth="100" width="100" color="red" ariaLabel="loading" />
        </div>
      ) : (
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "92vh",
          }}
        >
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={result}
            onStopSpinning={async () => {
              setMustSpin(false);
              setDurum(true);
            }}
            fontSize={14}
            radiusLineWidth={1}
            outerBorderWidth={0}
            backgroundColors={[
              "#5D8AA8",
              "blue",
              "red",
              "orange",
              "#3B444B	",
              "#E9D66B	",
              "#B2BEB5	",
              "purple",
              "black",
              "green",
              "#E52B50	",
              "#FFBF00	",
              "#A4C639	",
              "brown",
              "gray",
              "#E32636	",
              "gold",
              "#8DB600	",
              "pink",
              "#FBCEB1	",
              "#7FFFD4	",
              "#4B5320	",
              "#87A96B	",
              "#FF9966	",
              "#6D351A	",
              "#007FFF	",
              "#89CFF0	",
              "#A1CAF1	",
              "#F4C2C2	",
              "#FFD12A	",
              "#848482	",
              "#98777B	",
              "#F5F5DC	",
              "#3D2B1F	",
              "#318CE7	",
              "#FAF0BE	",
              "#0000FF	",
              "#DE5D83	",
              "#79443B	",
              "#CC0000	",
              "#B5A642	",
              "#66FF00	",
              "#BF94E4	",

              "#C32148	",
            ]}
            textColors={["#ffffff"]}
          />
          <button className="btn btn-success" onClick={handleSpinClick}>
            SPIN
          </button>
          {/* <img width={100} src={image} alt={"Screenshot"} /> */}
        </div>
      )}

      {durum && (
        <div style={{ position: "relative", top: "20%" }}>
          {" "}
          <WinnerModal file={file} winner={profileNames[prizeNumber]} />{" "}
        </div>
      )}
    </div>
  );
};

export default Circle3;
