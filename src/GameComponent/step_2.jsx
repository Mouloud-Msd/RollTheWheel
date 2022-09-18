import React, { useContext } from "react";
import { MyContext } from "../context/Provider";

import Canvas from "./canvasComponent";
function StepTwo() {
  const context = useContext(MyContext);
  return (
    <div className="flex flex-col justify-center align-center ">
      <div className="text-center">
        <h2>The color will determine the winner :)</h2>
        <h2 className="font-bold">Click on the Arrow to Start the game !</h2>
        <div className="GlassContainer grid grid-cols-2 gap-2 md:grid-cols-4 gap-4 py-2 px-5 max-h-32 overflow-y-scroll">
          <h2 className="my-auto text-white text-xl underline">Players : </h2>
          {context.state.players.map((player, index) => {
            return (
              <div
                className="flex justify-around p-1 mx-1 text-xl underline"
                style={{
                  borderLeft: `thick solid ${player.color}`,
                  color: player.color,
                }}
                key={index}
              >
                {player.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center align-center mt-12 overflow-hidden relative">
        <Canvas />
      </div>
    </div>
  );
}
export default StepTwo;
