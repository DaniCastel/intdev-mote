import styled, { css } from "styled-components";

const ScreenSD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #7bb2be;
`;

const ScreenContentSD = styled.div`
  width: 100%;
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

export {
  ScreenSD,
  LogoSD,
  ScreenButtonSD,
  ScreenButtonContentSD,
  ScreenContentSD
};
