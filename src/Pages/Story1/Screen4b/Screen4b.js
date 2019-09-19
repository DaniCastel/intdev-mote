import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  ScreenSD,
  LogoSD,
  ScreenButtonSD,
  ScreenContentSD,
  ScreenButtonContentSD
} from "./Styles";

function company(props) {
  props.history.push("/5");
}
function noCompany(props) {
  props.history.push("/4a");
}

function Screen4(props) {
  return (
    <ScreenSD>
      <ScreenContentSD>
        <LogoSD>logo</LogoSD>
        <ScreenButtonContentSD>
          <ScreenButtonSD onClick={() => company(props)}>
            EMPRESA
          </ScreenButtonSD>
        </ScreenButtonContentSD>
        <ScreenButtonContentSD>
          <ScreenButtonSD onClick={() => noCompany(props)}>
            NO EMPRESA
          </ScreenButtonSD>
        </ScreenButtonContentSD>
        <ScreenButtonContentSD>
          <ScreenButtonSD>ABOUT</ScreenButtonSD>
        </ScreenButtonContentSD>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default withRouter(Screen4);
