import React from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import WinnerModal from "../components/WinnerModal";
import { toast } from "react-toastify";
const Circle3 = () => {
  const [profileNames, setProfileNames] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [durum, setDurum] = useState(false);

  const state = useSelector((state) => state.users);
  const getUserNames = async () => {
    if (state?.profiles?.Likers) {
      const a = await Object.values(
        state?.profiles?.Likers?.map((liker) => liker.Username)
      );
      setProfileNames(a);
    } else if (state?.profiles?.Reposters) {
      const a = await Object.values(
        state?.profiles?.Reposters?.map((reposter) => reposter.Username)
      );
      setProfileNames(a);
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
    getUserNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const result = profileNames?.map((obj, i) =>
    Object.assign({ option: profileNames[i] }, obj)
  );

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * profileNames.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div style={{ height: "91vh" }}>
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
            onStopSpinning={() => {
              setMustSpin(false);
              setDurum(true);
            }}
            backgroundColors={[
              "#5D8AA8",
              "#F0F8FF	",
              "#E32636	",
              "gold",
              "#E52B50	",
              "#FFBF00	",
              "#A4C639	",
              "#8DB600	",
              "pink",
              "#FBCEB1	",
              "#7FFFD4	",
              "#4B5320	",
              "#3B444B	",
              "#E9D66B	",
              "#B2BEB5	",
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
        </div>
      )}

      {durum && (
        <div style={{ position: "relative", top: "20%" }}>
          {" "}
          <WinnerModal winner={profileNames[prizeNumber]} />{" "}
        </div>
      )}
    </div>
  );
};

export default Circle3;
