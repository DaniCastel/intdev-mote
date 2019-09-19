import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InitButtonSD,
  NextButtonSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import { ScreenSD, ScreenContentSD,OptionButtonSD } from "./Styles";

function init(props) {
  props.history.push("/");
}
function next(props) {
  console.log(props.id);
  props.history.push("/7");
}

function saveCompany(companyName, props){
  localStorage.setItem("companyName", companyName)
  props.history.push("/7");
}

function Screen(props) {
  return (
    <ScreenSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      <ScreenContentSD>
        <div style={{display: "flex", height: "100%", flexDirection: "row", justifyItems: "space-around", padding: 10}}> 
        <OptionButtonSD
        onClick={() => {
          saveCompany("Kokoson",props);
          }}
        >
          Kokoson
        </OptionButtonSD>
        <OptionButtonSD
        onClick={() => {
          saveCompany("Blicent",props);
          }}
        >
          Blicent
        </OptionButtonSD>
        </div>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
