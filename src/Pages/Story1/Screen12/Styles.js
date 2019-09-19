import styled, { css } from "styled-components";
import Screen12 from "Assets/ScreenBackgrounds/Screen12.png";
import activeCheckButton from "Assets/Buttons/activeCheckButton.png";
import defaultCheckButton from "Assets/Buttons/defaultCheckButton.png";
import hoverCheckButton from "Assets/Buttons/hoverCheckButton.png";

const ScreenSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const ScreenContentSD = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${Screen12});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const LogoSD = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #363635;
`;

const ScreenButtonContentSD = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const ScreenButtonSD = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  background-color: #bea97b;
  color: white;
  cursor: pointer;
`;

const OptionButtonSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  color: white;
  font-size: 15pt;
  font-weight: 800;
  background-image: url(${defaultCheckButton});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-self: flex-end;
  :hover {
    background-image: url(${hoverCheckButton});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  :active {
    background-image: url(${activeCheckButton});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export {
  ScreenSD,
  LogoSD,
  ScreenButtonSD,
  ScreenButtonContentSD,
  ScreenContentSD,
  OptionButtonSD
};