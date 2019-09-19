import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InitButtonSD,
  NextButtonSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import dino from "Assets/Buttons/dino.png";
import monster from "Assets/Buttons/monster.png";

import { ScreenSD, ScreenContentSD, OptionButtonSD } from "./Styles";

function init(props) {
  props.history.push("/");
}
function next(props) {
  console.log(props.id);
  props.history.push("/7");
}

function saveCharacter(characterName, props) {
  localStorage.setItem("character", characterName);
  props.history.push("/12");
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
          ¿Bad Guys?
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
              saveCharacter("dino", props);
            }}
          >
            <img src={dino} width="50px" height="60px" />
          </OptionButtonSD>
          <OptionButtonSD
            onClick={() => {
              saveCharacter("monster", props);
            }}
          >
            <img src={monster} width="50px" height="60px" />
          </OptionButtonSD>
        </div>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
