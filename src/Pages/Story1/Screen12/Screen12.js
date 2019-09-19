import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InitButtonSD,
  NextButtonSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import jurassic from "Assets/Buttons/jurassic.png";
import war from "Assets/Buttons/war.png";

import { ScreenSD, ScreenContentSD, OptionButtonSD } from "./Styles";

function init(props) {
  props.history.push("/");
}
function next(props) {
  console.log(props.id);
  props.history.push("/7");
}

function saveThematic(thematic, props) {
  localStorage.setItem("thematic", thematic);
  props.history.push("/13");
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
            padding: 10,
            alignItems: "flex-start"
          }}
        >
          ¿Wich thematic?
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
              saveThematic("jurassic", props);
            }}
          >
            <img src={jurassic} width="50px" height="60px" />
            Jurassic
          </OptionButtonSD>
          <OptionButtonSD
            onClick={() => {
              saveThematic("war", props);
            }}
          >
            <img src={war} width="50px" height="60px" />
            Civil war
          </OptionButtonSD>
        </div>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
