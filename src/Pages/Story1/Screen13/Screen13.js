import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InitButtonSD,
  NextButtonSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import web from "Assets/Buttons/web.png";
import movil from "Assets/Buttons/movil.png";

import { ScreenSD, ScreenContentSD, OptionButtonSD } from "./Styles";

function init(props) {
  props.history.push("/");
}
function next(props) {
  console.log(props.id);
  props.history.push("/7");
}

function savePlatform(platformName, props) {
  localStorage.setItem("platform", platformName);
  props.history.push("/14");
}

function Screen(props) {
  return (
    <ScreenSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      <ScreenContentSD>
        <div
          style={{
            display: "flex",
            fontWeight: 800,
            fontSize: "20pt",
            height: "100%",
            justifySelf: "flex-end",
            padding: 10,
            alignItems: "flex-end"
          }}
        >
          ¿Wich platform?
        </div>
        <div
          style={{
            display: "flex",
            height: 90,
            flexDirection: "row",
            justifyItems: "space-around",
            padding: 10
          }}
        >
          <OptionButtonSD
            onClick={() => {
              savePlatform("web", props);
            }}
          >
            <img src={web} width="50px" height="60px" />
            Web
          </OptionButtonSD>
          <OptionButtonSD
            onClick={() => {
              savePlatform("mobile", props);
            }}
          >
            <img src={movil} width="50px" height="60px" />
            Mobile
          </OptionButtonSD>
        </div>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
