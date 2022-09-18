/**import Wheel from "../GameLogic/Classes/WheelClass";
import Arrow from "../GameLogic/Classes/ArrowClass";

const WIDTH = window.innerWidth > 450 ? 450 : window.innerWidth;
const HEIGHT = WIDTH;
const RADIUS = WIDTH / 2 - 30;

const interval = 1000 / 30; //change frame every 1000/30 seconde (30fps)
let now;
let isRotating = false; //its not rotating by default
let rotate = 0;
let speedDec = 0; //Speed decrease
let ChoosedIndex = -1;
let delta = -1;
let then = Date.now();
const playersColors = ["red", "blue", "yellow", "green", "black"];

function run(canvas, ctx) {
  if (!isRotating && ChoosedIndex !== -1) {
    console.log("Game is over, the winner is ...", playersColors[ChoosedIndex]);
    window.cancelAnimationFrame(run);
    return;
  } else {
    console.log("Wait til the end of turn");
  }
  requestAnimationFrame(run);
  now = Date.now();
  delta = now - then;
  //now we check if it's time to change frame
  if (delta > interval) {
    then = delta - (delta % interval);
    //reset canvas
    console.log("rotate", rotate);
    const wheel = new Wheel(0, 0, RADIUS, 10, rotate);
    const arrow = new Arrow();
    //reset ctx
    //ctx.clearRect(0, 0, WIDTH, HEIGHT);
    //update the wheel
    wheel.update(ctx, WIDTH, HEIGHT, playersColors);
    arrow.draw(ctx, RADIUS);
    if (speedDec > 0) {
      rotate += speedDec;
      speedDec -= 0.015;
    } else {
      isRotating = false;
    }
  }
}

export default function start(canvas, ctx) {
  run(canvas, ctx);
  const index = Math.round(Math.random() * (playersColors.length - 1)); //get index from 0 to length-1
  rotate =
    ((2 * Math.PI) / playersColors.length) * -index +
    Math.PI / 2 +
    (2 * Math.PI) / playersColors.length / 4; //define rotation de get jackpot
  ChoosedIndex = index;
  console.log("index", ChoosedIndex);
  if (!isRotating) {
    isRotating = true;
    speedDec = 2;
  }
}
/**import React, { useEffect, useRef } from "react";

import Wheel from "../GameLogic/Classes/WheelClass";
import Arrow from "../GameLogic/Classes/ArrowClass";

export default function Canvas() {
  const canvas = React.useRef();
  console.log(canvas);
  const ctx = canvas.current.getContext("2d");
  const WIDTH = window.innerWidth > 500 ? 500 : window.innerWidth;
  const HEIGHT = WIDTH;
  const RADIUS = WIDTH / 2 - 30;

  const interval = 1000 / 30; //change frame every 1000/30 seconde (30fps)
  let now;
  let isRotating = false; //its not rotating by default
  let rotate = 0;
  let speedDec = 0; //Speed decrease
  let ChoosedIndex = -1;
  let delta = -1;
  let then = Date.now();
  const playersColors = ["red", "blue", "yellow", "green", "black"];

  console.log(canvas);

  return (
    <>
      <h1>The Winner is...</h1>
      <canvas id="myCanvas" ref={canvas}>
        Your browser does not support the HTML canvas tag.
      </canvas>
      <button onClick={() => run(canvas, ctx)}></button>
    </>
  );
}
 */
