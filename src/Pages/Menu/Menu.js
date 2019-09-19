import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MoteLogo from "Assets/MoteLogo.png";
import {
  MenuSD,
  LogoSD,
  MenuButtonSD,
  MenuContentSD,
  MenuButtonContentSD
} from "./Styles";

function start(props) {
  props.history.push("/1");
}
function about(props) {
  props.history.push("/about");
}

function Menu(props) {
  return (
    <MenuSD>
      <MenuContentSD>
        <LogoSD>
          <img src={MoteLogo} alt="logo" width="100px" height="100px"></img>
        </LogoSD>
        <MenuButtonContentSD>
          <MenuButtonSD onClick={() => start(props)}>START</MenuButtonSD>
        </MenuButtonContentSD>
        <MenuButtonContentSD>
          <MenuButtonSD onClick={() => about(props)}>ABOUT</MenuButtonSD>
        </MenuButtonContentSD>
      </MenuContentSD>
    </MenuSD>
  );
}

export default withRouter(Menu);
