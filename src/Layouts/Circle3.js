import React from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import WinnerModal from "../Components/WinnerModal";

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
    }
  };

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
    <div style={{ display: "relative" }}>
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
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "85vh",
            zIndex: "-2",
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
              "red",
              "lightblue",
              "black",
              "gold",
              "orange",
              "rebeccapurple",
              "brown",
              "gray",
              "pink",
              "darkgreen",
              "blue",
              "lime",
              "magenta",
              "silver",
              "whitesmoke",
              "ruby",
              "earlsgreen",
              "paleleaf",
              "dazzledblue",
            ]}
            textColors={["#ffffff"]}
          />
          <button
            className="btn btn-warning"
            style={{ position: "absolute", top: "75%", cursor: "pointer" }}
            onClick={handleSpinClick}
          >
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
