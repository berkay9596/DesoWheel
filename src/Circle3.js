import React from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Firework from "./Firework";

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
    <>
      {profileNames !== null ? (
        <div style={{ position: "absolute", left: "30%", marginTop: "6rem" }}>
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
            style={{ position: "relative", left: "15%" }}
            onClick={handleSpinClick}
          >
            SPIN
          </button>
        </div>
      ) : (
        ""
      )}
      {durum &&<div style={{position:"relative",top:"20%"}}> <Firework winner={profileNames[prizeNumber]} /> </div>}
    </>
  );
};

export default Circle3;
