import React, { useState } from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import {
  ScreenSD,
  InitButtonSD,
  NextButtonSD,
  ScreenContentSD
} from "Theme/Styles";
import animationData from "Assets/Animations/Screen17/Screen17.js";

function init(props) {
  props.history.push("/");
}
function next(props) {
  props.history.push("/18");
}

function Screen(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <ScreenSD>
      <ScreenContentSD>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </ScreenContentSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      <NextButtonSD onClick={() => next(props)}></NextButtonSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
