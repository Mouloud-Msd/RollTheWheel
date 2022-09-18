import React, { useContext } from "react";
import { MyContext } from "./context/Provider";

import StepOne from "./GameComponent/step_1";
import StepTwo from "./GameComponent/step_2";

const Main = () => {
  const context = useContext(MyContext);
  return (
    <div className="min-h-screen min-h-full	flex justify-center align-center bg-img">
      <div className="p-5 min-h-screen sm:w-3/4 GlassContainer">
        {context.state.step === 1 ? <StepOne /> : <StepTwo />}
      </div>
    </div>
  );
};

export default Main;
