import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  InitButtonSD,
  NextButtonSD,
  CheckButtonSD,
  ErrorButtonSD
} from "Theme/Styles";
import { ScreenSD, ScreenContentSD } from "./Styles";

function init(props) {
  props.history.push("/");
}
function next(props) {
  console.log(props.id);
  const next = 1 + +props.id;
  props.history.push("/3");
}

function Screen(props) {
  return (
    <ScreenSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      <ScreenContentSD>
        <CheckButtonSD
          id="checkbutton"
          onClick={() => {
            next(props);
          }}
        >
          Make a decision
        </CheckButtonSD>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
