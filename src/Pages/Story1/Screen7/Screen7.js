import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InitButtonSD,
  NextButtonSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import moba from "Assets/Buttons/moba.png";
import rolImg from "Assets/Buttons/rol.png";
import platform from "Assets/Buttons/platform.png";
import shooter from "Assets/Buttons/shooter.png";

import { ScreenSD, ScreenContentSD,OptionButtonSD } from "./Styles";

function init(props) {
  props.history.push("/");
}
function next(props) {
  console.log(props.id);
  props.history.push("/7");
}

function saveGenre(genreName, props){
  localStorage.setItem("genre", genreName)
  props.history.push("/8");
}

function Screen(props) {
  return (
    <ScreenSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      <ScreenContentSD>
        <div style={{display: "flex", height: "100%", flexDirection: "row", justifyItems: "space-around", padding: 10}}> 
        <OptionButtonSD
        onClick={() => {
          saveGenre("moba",props);
          }}
        >
          <img src={moba}  width="50px" height="50px"/>
          Moba
        </OptionButtonSD>
        <OptionButtonSD
        onClick={() => {
          saveGenre("shooter",props);
          }}
        >
           <img src={shooter}  width="50px" height="50px"/>
           Shooter
        </OptionButtonSD>
        <OptionButtonSD
        onClick={() => {
          saveGenre("platform",props);
          }}
        >
          <img src={platform}  width="50px" height="50px"/>
          Platform
        </OptionButtonSD>
        <OptionButtonSD
        onClick={() => {
          saveGenre("rol",props);
          }}
        >
              <img src={rolImg} width="50px" height="50px"/>
          Rol
        </OptionButtonSD>
        </div>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
