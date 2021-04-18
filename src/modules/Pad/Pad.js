import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons/Buttons";
// import { Howl } from "howler";
import { api } from "../../api";
import { ResponsiveContext } from "grommet";
import { useMouse } from "../../contexts/MouseContext";

export const PadGrid = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;

  grid-column-start: 1;
  grid-column-end: ${props => props.gridEnd};
  grid-row-start: 1
  grid-row-end: 4;
`;

export default function Pad() {
  const [sounds, setSounds] = useState([]);
  const soundToPlay = useSelector(state => state.pad.soundToPlay);

  const [keysDown, setKeysDown] = React.useState([]);
  const size = React.useContext(ResponsiveContext);
  const { mouseDown } = useMouse();

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

  // useEffect(() => {
  //   console.log(size);
  // }, [size]);
  // useEffect(() => {
  //   console.log(keysDown)
  // }, [keysDown]);

  useEffect(() => {
    const key = sounds.find(sound => sound.letter === soundToPlay.letter);
    if (key) {
      key.sound.play();
    }
  }, [soundToPlay]);

  const onKeyDown = e => {
    if (e.repeat) return;
    playSoundSocket(e.key);
  };

  const onKeyUp = e => {
    removeKeyDown(e.key);
  };

  const playSoundSocket = key => {
    api.get(`/sounds/play/${key}`);
    if (!keysDown.includes(key)) setKeysDown([...keysDown, key]);
  };

  const removeKeyDown = key => {
    setKeysDown(
      keysDown.filter(value => {
        return value !== key;
      })
    );
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
    <PadGrid tabIndex="0" gridEnd={size === "small" ? "5" : "4"}>
      {sounds.map(sound => (
        <PrimaryButton
          modifiers={keysDown.includes(sound.letter) ? "active" : ""}
          key={sound.letter}
          onTouchStart={() => {
            if (size === "small") playSoundSocket(sound.letter);
          }}
          onTouchEnd={() => {
            if (size === "small") removeKeyDown(sound.letter);
          }}
          onMouseDown={() => {
            if (size !== "small") playSoundSocket(sound.letter);
          }}
          onMouseUp={() => removeKeyDown(sound.letter)}
          // Bugg when click and leave window
          onMouseEnter={() => {
            if (mouseDown) playSoundSocket(sound.letter);
          }}
          onMouseLeave={() => {
            if (keysDown.length > 0) removeKeyDown(sound.letter);
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
