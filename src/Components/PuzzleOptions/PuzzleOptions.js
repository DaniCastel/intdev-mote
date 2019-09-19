import React, { useState } from "react";
import { PuzzleOptionsSD, PuzzleOptionSD, PuzzleImageSI } from "./Styles";
import emptyBoard from "Assets/Puzzle/EmptyBoard.png";
import defaultArtist from "Assets/Puzzle/Pieces/defaultArtist.png";
import checkArtist from "Assets/Puzzle/Pieces/checkArtist.png";
import defaultArtist1 from "Assets/Puzzle/Pieces/defaultArtist1.png";
import errorArtist1 from "Assets/Puzzle/Pieces/errorArtist1.png";
import defaultArtist2 from "Assets/Puzzle/Pieces/defaultArtist2.png";
import errorArtist2 from "Assets/Puzzle/Pieces/errorArtist2.png";
import defaultProgrammer from "Assets/Puzzle/Pieces/defaultProgrammer.png";
import checkProgrammer from "Assets/Puzzle/Pieces/checkProgrammer.png";
import defaultProgrammer1 from "Assets/Puzzle/Pieces/defaultProgrammer1.png";
import errorProgrammer1 from "Assets/Puzzle/Pieces/errorProgrammer1.png";
import defaultProgrammer2 from "Assets/Puzzle/Pieces/defaultProgrammer2.png";
import errorProgrammer2 from "Assets/Puzzle/Pieces/errorProgrammer2.png";
import defaultMusician from "Assets/Puzzle/Pieces/defaultMusician.png";
import checkMusician from "Assets/Puzzle/Pieces/checkMusician.png";
import defaultMusician1 from "Assets/Puzzle/Pieces/defaultMusician1.png";
import errorMusician1 from "Assets/Puzzle/Pieces/errorMusician1.png";
import defaultMusician2 from "Assets/Puzzle/Pieces/defaultMusician2.png";
import errorMusician2 from "Assets/Puzzle/Pieces/errorMusician2.png";
import defaultPublicist from "Assets/Puzzle/Pieces/defaultPublicist.png";
import checkPublicist from "Assets/Puzzle/Pieces/checkPublicist.png";
import defaultPublicist1 from "Assets/Puzzle/Pieces/defaultPublicist1.png";
import errorPublicist1 from "Assets/Puzzle/Pieces/errorPublicist1.png";
import defaultPublicist2 from "Assets/Puzzle/Pieces/defaultPublicist2.png";
import errorPublicist2 from "Assets/Puzzle/Pieces/errorPublicist2.png";

function renderImg(optionImgName) {
  switch (optionImgName) {
    case "defaultArtist":
      return <PuzzleImageSI src={defaultArtist}></PuzzleImageSI>;

    case "checkArtist":
      console.log("checkArtist");
      return <PuzzleImageSI src={checkArtist}></PuzzleImageSI>;

    case "defaultArtist1":
      return <PuzzleImageSI src={defaultArtist1}></PuzzleImageSI>;

    case "errorArtist1":
      return <PuzzleImageSI src={errorArtist1}></PuzzleImageSI>;

    case "defaultArtist2":
      return <PuzzleImageSI src={defaultArtist2}></PuzzleImageSI>;

    case "errorArtist2":
      return <PuzzleImageSI src={errorArtist2}></PuzzleImageSI>;

    case "defaultProgrammer":
      return <PuzzleImageSI src={defaultProgrammer}></PuzzleImageSI>;

    case "checkProgrammer":
      return <PuzzleImageSI src={checkProgrammer}></PuzzleImageSI>;

    case "defaultProgrammer1":
      return <PuzzleImageSI src={defaultProgrammer1}></PuzzleImageSI>;

    case "errorProgrammer1":
      return <PuzzleImageSI src={errorProgrammer1}></PuzzleImageSI>;

    case "defaultProgrammer2":
      return <PuzzleImageSI src={defaultProgrammer2}></PuzzleImageSI>;

    case "errorProgrammer2":
      return <PuzzleImageSI src={errorProgrammer2}></PuzzleImageSI>;

    case "defaultMusician":
      return <PuzzleImageSI src={defaultMusician}></PuzzleImageSI>;

    case "checkMusician":
      return <PuzzleImageSI src={checkMusician}></PuzzleImageSI>;

    case "defaultMusician1":
      return <PuzzleImageSI src={defaultMusician1}></PuzzleImageSI>;

    case "errorMusician1":
      return <PuzzleImageSI src={errorMusician1}></PuzzleImageSI>;

    case "defaultMusician2":
      return <PuzzleImageSI src={defaultMusician2}></PuzzleImageSI>;

    case "errorMusician2":
      return <PuzzleImageSI src={errorMusician2}></PuzzleImageSI>;

    case "defaultPublicist":
      return <PuzzleImageSI src={defaultPublicist}></PuzzleImageSI>;

    case "checkPublicist":
      return <PuzzleImageSI src={checkPublicist}></PuzzleImageSI>;

    case "defaultPublicist1":
      return <PuzzleImageSI src={defaultPublicist1}></PuzzleImageSI>;

    case "errorPublicist1":
      return <PuzzleImageSI src={errorPublicist1}></PuzzleImageSI>;

    case "defaultPublicist2":
      return <PuzzleImageSI src={defaultPublicist2}></PuzzleImageSI>;

    case "errorPublicist2":
      return <PuzzleImageSI src={errorPublicist2}></PuzzleImageSI>;

    default:
      return <PuzzleImageSI src={errorPublicist2}></PuzzleImageSI>;
  }
}

function renderOptions(role, options, selectOption) {
  const renderedOptions = [];
  options.forEach((option, index) => {
    const optionImgName = option.showed
      ? option.selectedName
      : option.defaultName;
    console.log(optionImgName);
    renderedOptions.push(
      <PuzzleOptionSD key={option.id} onClick={() => selectOption(role, index)}>
        {option.showed === true
          ? renderImg(option.selectedName)
          : renderImg(option.defaultName)}
      </PuzzleOptionSD>
    );
  });
  return renderedOptions;
}

function PuzzleOptions({ role, options, selectOption }) {
  return (
    <PuzzleOptionsSD>
      {renderOptions(role, options, selectOption)}
    </PuzzleOptionsSD>
  );
}

export default PuzzleOptions;
