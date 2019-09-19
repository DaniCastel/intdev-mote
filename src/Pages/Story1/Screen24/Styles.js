import styled, { css } from "styled-components";
import about from "Assets/ScreenBackgrounds/About.png";
import menuButton from "Assets/Buttons/menuButton.png";

const ScreenSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: black;
  position: relative;
`;

const ScreenContentSD = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${about});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70% 80%;
  height: 100%;
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
const InitButtonSD = styled.div`
  display: flex;
  align-self: flex-start
  height: 25px;
  width: 35px;
  background-color: #bea97b;
  cursor: pointer;
  position: absolute;
  left: 30px;
  top: 30px;
  background: url(${menuButton});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70% 80%;
`;

export {
  ScreenSD,
  LogoSD,
  ScreenButtonSD,
  ScreenButtonContentSD,
  ScreenContentSD,
  InitButtonSD
};
