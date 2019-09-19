import React, { useState } from "react";
import Lottie from "react-lottie";
import Sound from "react-sound";
import song1 from "Assets/Sounds/MX_Historia_01.wav";
import { withRouter } from "react-router-dom";
import { ScreenSD, ScreenContentSD, InitButtonSD } from "./Styles";

function init(props) {
  props.history.push("/");
}

function Screen(props) {
  return (
    <ScreenSD>
      <ScreenContentSD>
        <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
