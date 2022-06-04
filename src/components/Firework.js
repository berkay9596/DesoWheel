import { Fireworks } from "fireworks/lib/react";

const Firework = ({ winner }) => {
  let fxProps = {
    count: 1,
    interval: 300,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 100 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "20vh",
       
      }}
    >
      <Fireworks {...fxProps} />

      <h3
      className="text-center"
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "4rem",
          lineHeight:"40px"
      
        }}
      >
        Congrats! <span style={{ color: "red" }}>{winner}</span>
      </h3>
    </div>
  );
};

export default Firework;
