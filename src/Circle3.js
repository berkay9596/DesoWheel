import React from "react";
import { Wheel } from "react-custom-roulette";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Circle3 = () => {
  const [profileNames, setProfileNames] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const state = useSelector((state) => state.users);
  console.log("state", state);

  const getUserNames = async () => {
    if (state?.profiles?.Likers) {
      const a = await Object.values(
        state?.profiles?.Likers?.map((liker) => liker.Username)
      );
      setProfileNames(a);
    } else {
      console.log("object is falsy");
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
        <div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={result}
            onStopSpinning={() => {
              setMustSpin(false);
              alert(profileNames[prizeNumber]);
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
            ]}
            textColors={["#ffffff"]}
          />
          <button onClick={handleSpinClick}>SPIN</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Circle3;
