import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { Howl } from "howler";
import wav from "./studio-drums-1/421__tictacshutup__prac-hat-2.wav";
import wav2 from "./studio-drums-1/422__tictacshutup__prac-hat-3.wav";
import wav3 from "./studio-drums-1/423__tictacshutup__prac-hat-open-2.wav";
import wav4 from "./studio-drums-1/424__tictacshutup__prac-hat-open-3.wav";
import wav5 from "./studio-drums-1/435__tictacshutup__prac-ride-bell.wav";
import wav6 from "./studio-drums-1/436__tictacshutup__prac-ride.wav";
import wav7 from "./studio-drums-1/448__tictacshutup__prac-tom-light.wav";
import wav8 from "./studio-drums-1/445__tictacshutup__prac-snare-roll-short.wav";
import wav9 from "./studio-drums-1/434__tictacshutup__prac-ride-bell-loud.wav";

export const PadGrid = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
`;

export default function Pad() {
  const [mouseDown, setMouseDown] = React.useState(false);
  const keys = [
    {
      letter: "a",
      keyCode: 65,
      sound: new Howl({
        src: [wav],
      }),
    },
    {
      letter: "z",
      keyCode: 90,
      sound: new Howl({
        src: [wav2],
      }),
    },
    {
      letter: "e",
      keyCode: 69,
      sound: new Howl({
        src: [wav3],
      }),
    },
    {
      letter: "q",
      keyCode: 81,
      sound: new Howl({
        src: [wav4],
      }),
    },
    {
      letter: "s",
      keyCode: 83,
      sound: new Howl({
        src: [wav5],
      }),
    },

    {
      letter: "d",
      keyCode: 68,
      sound: new Howl({
        src: [wav6],
      }),
    },
    {
      letter: "w",
      keyCode: 87,
      sound: new Howl({
        src: [wav7],
      }),
    },
    {
      letter: "x",
      keyCode: 88,
      sound: new Howl({
        src: [wav8],
      }),
    },
    {
      letter: "c",
      keyCode: 67,
      sound: new Howl({
        src: [wav9],
      }),
    },
  ];

  const onKeyDown = e => {
    if (e.repeat) return;
    const key = keys.find(key => key.keyCode === e.keyCode);
    key.sound.play();
  };
  const onKeyUp = () => {
    // console.log(e.keyCode);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  });

  return (
    <PadGrid
      tabIndex="0"
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      {keys.map(key => (
        <PrimaryButton
          key={key.letter}
          onMouseDown={() => key.sound.play()}
          onMouseEnter={() => {
            if (mouseDown) key.sound.play();
          }}
        >
          {key.letter}
        </PrimaryButton>
      ))}
    </PadGrid>
  );
}
