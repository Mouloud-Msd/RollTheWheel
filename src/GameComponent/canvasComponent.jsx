import React, { useState, useContext } from "react";
import "../GameLogic/game.css";
import Wheel from "../GameLogic/Classes/WheelClass";
import { ReactComponent as Arrow } from "../assets/down-arrow.svg";
import { MyContext } from "../context/Provider";

const WIDTH = window.innerWidth > 450 ? 450 : window.innerWidth;
const HEIGHT = WIDTH;
const RADIUS = WIDTH / 2 - 30;
const RandomTime = Math.floor(Math.random() * 10000);

export default function Canvas() {
  const [clss, setClss] = useState();
  const [winner, setWinner] = useState(false);
  const context = useContext(MyContext);
  let rotate = 0;
  var canvas = React.useRef();

  const startAnimation = () => {
    setClss("animate");

    setTimeout(() => {
      setClss("animate StopAnimate");
      setInterval(() => {
        setWinner(true);
      }, 500);
    }, RandomTime);
  };
  let index;
  React.useEffect(() => {
    const playersColors = context.state.players;
    var ctx = canvas.current.getContext("2d");
    index = Math.round(Math.random() * (playersColors.length - 1)); //get index from 0 to length-1
    rotate =
      ((2 * Math.PI) / playersColors.length) * -index +
      Math.PI / 2 +
      (2 * Math.PI) / playersColors.length / 4; //define rotation de get jackpot
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const wheel = new Wheel(0, 0, RADIUS, 10, rotate);
    wheel.update(ctx, WIDTH, HEIGHT, playersColors);
  }, []);

  return (
    <>
      <Arrow
        className="absolute top-0 left-50 z-10 cursor-pointer hover:fill-pink-500"
        onClick={startAnimation}
      />
      <canvas className={clss} ref={canvas} width={WIDTH} height={HEIGHT}>
        Your browser does not support the HTML canvas tag.
      </canvas>
      {winner && alert("Congratulations for the winner 🔥🔥🔥")}
    </>
  );
}
