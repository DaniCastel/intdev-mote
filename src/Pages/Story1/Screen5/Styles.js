import styled, { css } from "styled-components";
import activeCheckButton from "Assets/Buttons/activeCheckButton.png";
import activeErrorButton from "Assets/Buttons/activeErrorButton.png";
import defaultCheckButton from "Assets/Buttons/defaultCheckButton.png";
import defaultErrorButton from "Assets/Buttons/defaultErrorButton.png";
import hoverCheckButton from "Assets/Buttons/hoverCheckButton.png";
import hoverErrorButton from "Assets/Buttons/hoverErrorButton.png";
const ScreenSD = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #F8EECD; 
  background-color: black; 
`;

const PuzzleColumnSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  flex-direction: column;
`;

const PuzzleColumnTitleSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  color: white;
  font-size: 20pt;
  font-weight: 800;
`;

const LeftSD = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: black;
`;

const RightSD = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  height: 100%;
  background-color: black;
`;

const CenterSD = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  align-self: center;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NextButtonSD = styled.div`
  display: flex;
  height: 100px;
  width: 150px;
  align-self: center;
  align-items: center;
  justify-content: center;
  position: relative;
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
  color: white;
  font-size: 15pt;
  font-weight: 800;
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


const BoardImageSI = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
`;

export {
  ScreenSD,
  PuzzleColumnTitleSD,
  PuzzleColumnSD,
  LeftSD,
  RightSD,
  CenterSD,
  BoardImageSI,
  NextButtonSD,
  CheckButtonSD
};
