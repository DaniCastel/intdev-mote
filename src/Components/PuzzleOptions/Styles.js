import styled, { css } from "styled-components";

const PuzzleOptionsSD = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PuzzleOptionSD = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  margin: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer ;
  background-color: #88DA96;
`;

const PuzzleImageSI = styled.img`
  width: auto;
  height: 100%;
  cursor: pointer;
`;

export { PuzzleOptionsSD, PuzzleOptionSD, PuzzleImageSI };
