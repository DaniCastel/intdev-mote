import styled, { css } from "styled-components";
import defaultButton from "Assets/Buttons/defaultButton.png";
import hoverButton from "Assets/Buttons/hoverButton.png";
import clickButton from "Assets/Buttons/clickButton.png";

const MenuSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const MenuContentSD = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoSD = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const MenuButtonContentSD = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  font-family: "Coming Soon";
`;

const MenuButtonSD = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  background-image: url(${defaultButton});
  background-size: 90% 90%;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    background-image: url(${hoverButton});
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
  }
  :active {
    background-image: url(${clickButton});
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export { MenuSD, LogoSD, MenuButtonSD, MenuButtonContentSD, MenuContentSD };
