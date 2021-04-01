import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons/Buttons";
// import { Howl } from "howler";
import { api } from "../../api";

import { useIo } from "../../contexts/ioContext";
export const PadGrid = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
`;

export default function Pad() {
  const [sounds, setSounds] = useState([]);
  const { io } = useIo();
  const [mouseDown, setMouseDown] = React.useState(false);

  useEffect(() => {
    api.get(`/sounds/`).then(res => {
      setSounds(
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

  useEffect(() => {
    if (io && sounds) {
      io.on("PLAYSOUND", data => {
        const key = sounds.find(sound => sound.letter === data);
        if (key) {
          key.sound.play();
        }
      });
    }
  }, [io, sounds]);

  const onKeyDown = e => {
    if (e.repeat) return;
    const sound = sounds.find(key => key.keyCode == e.keyCode);
    if (sound) {
      playSound(sound.letter);
    }
  };
  const onKeyUp = () => {
    // console.log(e.keyCode);
  };

  const playSound = key => {
    api.get(`/sounds/play/${key}`);
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
      {sounds.map(sound => (
        <PrimaryButton
          key={sound.letter}
          onMouseDown={() => playSound(sound.keyCode)}
          onMouseEnter={() => {
            if (mouseDown) playSound(sound.keyCode);
          }}
        >
          {sound.letter}
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
