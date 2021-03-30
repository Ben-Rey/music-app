import React, { useEffect } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { Howl } from "howler";
import axios from "axios";

export const PadGrid = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
`;

export default function Pad() {
  const [mouseDown, setMouseDown] = React.useState(false);
  const [keys, setKeys] = React.useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/sounds/`).then(res => {
      setKeys(
        res.data.map(sound => ({
          letter: sound.key,
          keyCode: sound.keyCode,
          sound: new Howl({
            src: [`http://localhost:3001/sounds/${sound.name}`],
          }),
        }))
      );
    });
  }, []);

  const onKeyDown = e => {
    console.log(keys);
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

// res.data.reduce((acc, sound) => {
//   let { keyCode } = sound;

//   return { ...acc, [keyCode]:     {
//     letter: "d",
//     keyCode: 68,
//     sound: new Howl({
//       src: [sound.namle],
//     }),
//   }, };
// }, {})
