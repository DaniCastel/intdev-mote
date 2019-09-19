import React, { useState } from "react";
import { ScreenSD, ScreenContentSD } from "./Styles";
import { BasicScreen } from "Components";
function Screen() {
  return (
    <ScreenSD>
      <ScreenContentSD>
        <BasicScreen id={21}></BasicScreen>
      </ScreenContentSD>
    </ScreenSD>
  );
}

export default Screen;