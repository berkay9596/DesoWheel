import React from "react";
import Wave from "react-wavify";

const WaveEffect = () => {
  return (
    <Wave
      fill="#191CA9"
      paused={false}
      options={{
        height: 0,
        amplitude: 30,
        speed: 0.35,
        points: 3,
      }}
    />
  );
};

export default WaveEffect;
