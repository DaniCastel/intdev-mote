import React, { useState } from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import {
  ScreenSD,
  InitButtonSD,
  NextButtonSD,
  ScreenContentSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import animationData from "Assets/Animations/Screen03/screen03.js";

function init(props) {
  props.history.push("/");
}
function check(props) {
  props.history.push("/4");
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
      <ScreenContentSD id="screenContent">
        <Lottie options={defaultOptions} height="100%" width="100%" />
        <CheckButtonSD
          id="checkbutton"
          onClick={() => {
            check(props);
          }}
        >
          FOUND A COMPANY
        </CheckButtonSD>
        <ErrorButtonSD
          id="errorbutton"
          onClick={() => {
            check(props);
          }}
        >
          GET A JOB
        </ErrorButtonSD>
      </ScreenContentSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
