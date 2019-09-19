import React, { useState } from "react";
import { PuzzleOptions } from "Components";
import { withRouter } from "react-router-dom";

import emptyBoard from "Assets/Puzzle/EmptyBoard.png";
import PublicistPiece from "Assets/Puzzle/PublicistPiece.png";
import ArtistPiece from "Assets/Puzzle/ArtistPiece.png";
import ProgrammerPiece from "Assets/Puzzle/ProgrammerPiece.png";
import CompleteBoard from "Assets/Puzzle/CompleteBoard.png";
import MusicianPiece from "Assets/Puzzle/MusicianPiece.png";
import Me from "Assets/Puzzle/Me.png";
import {
  ScreenSD,
  PuzzleColumnTitleSD,
  PuzzleColumnSD,
  LeftSD,
  RightSD,
  CenterSD,
  BoardImageSI,
  NextButtonSD,
  CheckButtonSD
} from "./Styles";

function next(props) {
  console.log(props.id);
  const next = 1 + +props.id;
  props.history.push("/6");
}

function Screen(props) {
  const [optionsState, setOptionsState] = useState({
    artist: false,
    programmer: false,
    musician: false,
    publicist: false
  });

  const [roles, setRoles] = useState({
    artist: [
      {
        id: "Artist1",
        isCorrect: false,
        showed: false,
        selectedName: "errorArtist1",
        defaultName: "defaultArtist1"
      },
      {
        id: "Artist2",
        isCorrect: false,
        showed: false,
        selectedName: "errorArtist2",
        defaultName: "defaultArtist2"
      },
      {
        id: "Artist3",
        isCorrect: true,
        showed: false,
        selectedName: "checkArtist",
        defaultName: "defaultArtist"
      }
    ],
    programmer: [
      {
        id: "Programmer1",
        isCorrect: false,
        showed: false,
        selectedName: "errorProgrammer1",
        defaultName: "defaultProgrammer1"
      },
      {
        id: "Programmer",
        isCorrect: true,
        showed: false,
        selectedName: "checkProgrammer",
        defaultName: "defaultProgrammer"
      },
      {
        id: "Programmer2",
        isCorrect: false,
        showed: false,
        selectedName: "errorProgrammer2",
        defaultName: "defaultProgrammer2"
      }
    ],
    musician: [
      {
        id: "Musician",
        isCorrect: true,
        showed: false,
        selectedName: "checkMusician",
        defaultName: "defaultMusician"
      },
      {
        id: "Musician1",
        isCorrect: false,
        showed: false,
        selectedName: "errorMusician1",
        defaultName: "defaultMusician1"
      },
      {
        id: "Musician2",
        isCorrect: false,
        showed: false,
        selectedName: "errorMusician2",
        defaultName: "defaultMusician2"
      }
    ],
    publicist: [
      {
        id: "Publicist1",
        isCorrect: false,
        showed: false,
        selectedName: "errorPublicist1",
        defaultName: "defaultPublicist1"
      },
      {
        id: "Publicist2",
        isCorrect: false,
        showed: false,
        selectedName: "errorPublicist2",
        defaultName: "defaultPublicist2"
      },
      {
        id: "Publicist3",
        isCorrect: true,
        showed: false,
        selectedName: "checkPublicist",
        defaultName: "defaultPublicist"
      }
    ]
  });

  const selectOption = (role, index) => {
    switch (role) {
      case "artist":
        if (index == 2) {
          setOptionsState(optionsState => ({ ...optionsState, artist: true }));
        }
        break;
      case "programmer":
        if (index == 1) {
          setOptionsState(optionsState => ({
            ...optionsState,
            programmer: true
          }));
        }
        break;
      case "musician":
        if (index == 0) {
          setOptionsState(optionsState => ({
            ...optionsState,
            musician: true
          }));
        }
        break;
      case "publicist":
        if (index == 2) {
          setOptionsState(optionsState => ({
            ...optionsState,
            publicist: true
          }));
        }
        break;
      default:
        break;
    }
    const roleState = { ...roles };
    roleState[role][index].showed = true;
    setRoles(roleState);
    console.log("optionsState", optionsState);
  };

  return (
    <ScreenSD>
      <LeftSD>
        <PuzzleColumnSD>
          <PuzzleColumnTitleSD>Artist</PuzzleColumnTitleSD>
          <PuzzleOptions
            index={0}
            key={0}
            role="artist"
            options={roles.artist}
            selectOption={selectOption}
          ></PuzzleOptions>
        </PuzzleColumnSD>
        <PuzzleColumnSD>
          <PuzzleColumnTitleSD>Programmer</PuzzleColumnTitleSD>
          <PuzzleOptions
            index={1}
            key={1}
            role="programmer"
            options={roles.programmer}
            selectOption={selectOption}
          ></PuzzleOptions>
        </PuzzleColumnSD>
      </LeftSD>
      <CenterSD>
        <BoardImageSI
          src={emptyBoard}
          alt="empty board"
          style={{ zIndex: 0 }}
        ></BoardImageSI>
        {optionsState.artist === true && (
          <BoardImageSI
            src={ArtistPiece}
            alt="Artist Piece"
            style={{ zIndex: 0 }}
          ></BoardImageSI>
        )}
        {optionsState.programmer === true && (
          <BoardImageSI
            src={ProgrammerPiece}
            style={{ zIndex: 3 }}
            alt="Programmer Piece"
          ></BoardImageSI>
        )}
        {optionsState.musician === true && (
          <BoardImageSI
            src={MusicianPiece}
            alt="Musician Piece"
            style={{ zIndex: 4 }}
          ></BoardImageSI>
        )}
        {optionsState.publicist === true && (
          <BoardImageSI
            src={PublicistPiece}
            alt="empty board"
            style={{ zIndex: 1 }}
          ></BoardImageSI>
        )}
        <BoardImageSI
          src={Me}
          style={{ zIndex: 5 }}
          alt="Programmer Piece"
        ></BoardImageSI>
        {optionsState.publicist === true &&
          optionsState.programmer === true &&
          optionsState.musician === true &&
          optionsState.artist === true && (
            <BoardImageSI
              src={CompleteBoard}
              alt="empty board"
              style={{ zIndex: 6 }}
            ></BoardImageSI>
          )}
      </CenterSD>
      <NextButtonSD>
        <CheckButtonSD
          id="checkbutton"
          onClick={() => {
            next(props);
          }}
        >
          Continue
        </CheckButtonSD>
      </NextButtonSD>
      <RightSD>
        <PuzzleColumnSD>
          <PuzzleColumnTitleSD>Musician</PuzzleColumnTitleSD>
          <PuzzleOptions
            index={2}
            key={2}
            role="musician"
            options={roles.musician}
            selectOption={selectOption}
          ></PuzzleOptions>
        </PuzzleColumnSD>
        <PuzzleColumnSD>
          <PuzzleColumnTitleSD>Publicist</PuzzleColumnTitleSD>
          <PuzzleOptions
            index={3}
            key={3}
            role="publicist"
            options={roles.publicist}
            selectOption={selectOption}
          ></PuzzleOptions>
        </PuzzleColumnSD>
      </RightSD>
    </ScreenSD>
  );
}

export default withRouter(Screen);
