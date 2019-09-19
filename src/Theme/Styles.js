import styled, { css } from "styled-components";
import nextArrow from "Assets/Buttons/nextArrow.png";
import menuButton from "Assets/Buttons/menuButton.png";
import activeCheckButton from "Assets/Buttons/activeCheckButton.png";
import activeErrorButton from "Assets/Buttons/activeErrorButton.png";
import defaultCheckButton from "Assets/Buttons/defaultCheckButton.png";
import defaultErrorButton from "Assets/Buttons/defaultErrorButton.png";
import hoverCheckButton from "Assets/Buttons/hoverCheckButton.png";
import hoverErrorButton from "Assets/Buttons/hoverErrorButton.png";

const ScreenSD = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const ScreenContentSD = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const LogoSD = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #7bb2be;
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
  height: 100px;
  width: 180px;
  background-color: #bea97b;
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: url(${nextArrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40% 50%;
`;

const CheckButtonSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  position: absolute;
  color: white;
  font-size: 15pt;
  font-weight: 800;
  right: 30px;
  bottom: 30px;
  background-image: url(${defaultCheckButton});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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

const ErrorButtonSD = styled.div`
  display: flex;
  height: 100px;
  width: 200px;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15pt;
  font-weight: 800;
  cursor: pointer;
  position: absolute;
  left: 30px;
  bottom: 30px;
  background-image: url(${defaultErrorButton});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    background-image: url(${hoverErrorButton});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  :active {
    background-image: url(${activeErrorButton});
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
  NextButtonSD,
  InitButtonSD,
  CheckButtonSD,
  ErrorButtonSD
};
