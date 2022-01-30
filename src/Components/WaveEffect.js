import React from "react";
import Wave from "react-wavify";

const WaveEffect = () => {
  return (
    <Wave
      fill="#A2B391"
      paused={false}
      options={{
        height: -3,
        amplitude: 20,
        speed: 0.35,
        points: 3,
      }}
    />
  );
};

export default WaveEffect;
