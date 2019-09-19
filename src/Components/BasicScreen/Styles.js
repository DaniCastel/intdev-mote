import styled, { css } from "styled-components";
import nextArrow from "Assets/Buttons/nextArrow.png";
import menuButton from "Assets/Buttons/menuButton.png";

const ScreenSD = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const InitButtonSD = styled.div`
  display: flex;
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

const NextButtonSD = styled.div`
  display: flex;
  height: 50px;
  width: 90px;
  background-color: #bea97b;
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 30px;
  background: url(${nextArrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70% 80%;
`;

export { ScreenSD, InitButtonSD, NextButtonSD };
