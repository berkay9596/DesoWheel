import { Fireworks } from "fireworks/lib/react";

const Firework = ({ winner }) => {
  let fxProps = {
    count: 2,
    interval: 150,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 100 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };
  return (
    <div>
      <Fireworks {...fxProps} />
      <h1
        style={{
          position: "relative",
          left: "37%",
          marginTop: "50px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Congrats! {winner}
      </h1>
    </div>
  );
};

export default Firework;
