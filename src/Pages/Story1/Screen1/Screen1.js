import React, { useState } from "react";
import Lottie from "react-lottie";
import Sound from "react-sound";
import song1 from "Assets/Sounds/MX_Historia_01.wav";
import { withRouter } from "react-router-dom";
import {
  ScreenSD,
  InitButtonSD,
  NextButtonSD,
  ScreenContentSD
} from "Theme/Styles";
import animationData from "Assets/Animations/Screen01/Screen01";

function init(props) {
  props.history.push("/");
}
function next(props) {
  props.history.push("/2");
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
      <Sound url={song1} playStatus={Sound.status.PLAYING} />
      <ScreenContentSD>
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </ScreenContentSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      <NextButtonSD onClick={() => next(props)}></NextButtonSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
