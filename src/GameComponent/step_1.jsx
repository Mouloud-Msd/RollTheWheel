import React, { useRef, useState, useContext } from "react";
import { MyContext } from "../context/Provider";

import { ReactComponent as Delete } from "../assets/delete.svg";

const StepOne = () => {
  const [err, setErr] = useState({ isErr: true, message: "" });
  const playerName = useRef();
  const playerColor = useRef();
  const context = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const player = {
      name: playerName.current.value,
      color: playerColor.current.value,
    };
    context.AddPlayers(player);
    playerName.current.value = "";
    setErr({ isErr: true });
  };
  const validateName = (value) => {
    if (value.length <= 3 || value.length >= 15) {
      return {
        isErr: true,
        message:
          "please note that the name should have between 3 and 15 characters",
      };
    } else {
      return { isErr: false };
    }
  };

  const onChangeName = ({ target: { value } } = value) => {
    const errors = validateName(value);
    console.log(errors);
    errors.isErr
      ? setErr({ isErr: true, message: errors.message })
      : setErr({ isErr: false });
  };
  console.log("context", context);
  return (
    <div className="font-title text-center">
      <h2 className="text-2xl">This is Step 1 ! </h2>

      <h4 className="text-lg">in this step you will have to add players</h4>
      <h2 className="font-notes text-red-700 text-md font-bold underline">
        You need at least 2 players to play
      </h2>
      <h2 className="font-notes text-red-700 text-md font-bold underline">
        For a better experience it's better to choose a different color for each
        player
      </h2>
      <h3 className="text-lg">
        The winner will be determined in the next step
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center align-center md:flex-row m-2  "
      >
        <label className="my-auto mr-2" htmlFor="player_name">
          Add Player
        </label>
        <div className="flex justify-around m-5">
          <input
            className="font-notes p-2 md:w-48 h-10 outline-none rounded-md relative"
            type="text"
            placeholder="player name..."
            name="player_name"
            ref={playerName}
            onChange={onChangeName}
            autocomplete="off"
          />
          <input
            className="md:w-10 h-10 rounded-md cursor-pointer"
            ref={playerColor}
            type="color"
          />
        </div>
        <button
          className={err.isErr ? "disabled" : "enabled"}
          type="submit"
          disabled={err.isErr}
        >
          ++ Add ++
        </button>
      </form>
      {err.isErr ? (
        <span className="font-notes text-lg font-bold text-red-600 ">
          {err.message}
        </span>
      ) : null}

      {context.state.players.length !== 0 ? (
        <>
          <div className="GlassContainer grid grid-cols-2 gap-2 md:grid-cols-4 gap-4 py-2 px-5 max-h-72 overflow-y-scroll">
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
                  <Delete
                    className="cursor-pointer"
                    onClick={() => context.DeletePlayer(index)}
                  />
                </div>
              );
            })}
          </div>
          <button
            disabled={context.state.players.length < 2}
            onClick={context.nextStep}
            className={
              context.state.players.length < 2 ? "disabled" : "enabled"
            }
          >
            Next Step
          </button>
        </>
      ) : null}
    </div>
  );
};

export default StepOne;
