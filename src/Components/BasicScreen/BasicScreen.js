import React, { useState } from "react";
import { ScreenSD, InitButtonSD, NextButtonSD } from "./Styles";
import { withRouter } from "react-router-dom";

function init(props) {
  props.history.push("/");
}
function next(props) {
  console.log(props.id);
  const next = 1 + +props.id;
  props.history.push("/" + next);
}

function BasicScreen(props, id) {
  return (
    <ScreenSD>
      <InitButtonSD onClick={() => init(props)}></InitButtonSD>
      <NextButtonSD onClick={() => next(props)}></NextButtonSD>
    </ScreenSD>
  );
}

export default withRouter(BasicScreen);
