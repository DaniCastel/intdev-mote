import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InitButtonSD,
  NextButtonSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import { PuzzleImageSI } from "./Styles";

import jurassic from "Assets/Buttons/jurassic.png";
import war from "Assets/Buttons/war.png";
import dino from "Assets/Buttons/dino.png";
import monster from "Assets/Buttons/monster.png";
import moba from "Assets/Buttons/moba.png";
import rolImg from "Assets/Buttons/rol.png";
import platform from "Assets/Buttons/platform.png";
import web from "Assets/Buttons/web.png";
import movil from "Assets/Buttons/movil.png";
import shooter from "Assets/Buttons/shooter.png";

import { ScreenSD, ScreenContentSD, OptionButtonSD } from "./Styles";

function init(props) {
  props.history.push("/");
}

function getGenre() {
  switch (localStorage.getItem("genre")) {
    case "moba":
      return <PuzzleImageSI src={moba}></PuzzleImageSI>;
    case "shooter":
      return <PuzzleImageSI src={shooter}></PuzzleImageSI>;
    case "platform":
      return <PuzzleImageSI src={platform}></PuzzleImageSI>;
    case "rol":
      return <PuzzleImageSI src={rolImg}></PuzzleImageSI>;
    default:
      return <PuzzleImageSI src={web}></PuzzleImageSI>;
  }
}

function getMonster() {
  switch (localStorage.getItem("character")) {
    case "dino":
      return <PuzzleImageSI src={dino}></PuzzleImageSI>;
    case "monster":
      return <PuzzleImageSI src={monster}></PuzzleImageSI>;
    default:
      return <PuzzleImageSI src={web}></PuzzleImageSI>;
  }
}

function getThematic() {
  switch (localStorage.getItem("thematic")) {
    case "jurassic":
      return <PuzzleImageSI src={jurassic}></PuzzleImageSI>;
    case "war":
      return <PuzzleImageSI src={war}></PuzzleImageSI>;
    default:
      return <PuzzleImageSI src={web}></PuzzleImageSI>;
  }
}
function getPlatform() {
  switch (localStorage.getItem("platform")) {
    case "web":
      return <PuzzleImageSI src={web}></PuzzleImageSI>;
    case "movil":
      return <PuzzleImageSI src={movil}></PuzzleImageSI>;
    default:
      return <PuzzleImageSI src={web}></PuzzleImageSI>;
  }
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
          <OptionButtonSD>{getMonster()}</OptionButtonSD>
          <OptionButtonSD>{getThematic()}</OptionButtonSD>
          <OptionButtonSD>{getPlatform()}</OptionButtonSD>
          <OptionButtonSD>{getGenre()}</OptionButtonSD>
        </div>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
