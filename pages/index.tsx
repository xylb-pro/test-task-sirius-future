import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FallingStarsZone } from '../layouts/FallingStarsZone';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { StarContainer } from '../layouts/StarContainer';
import { createStar } from '../utils/createStar';
import {
  MAX_X_POSITION,
  MAX_Y_POSITION,
  STAR_STEP,
  TIME_OUT,
  VALUE,
} from '../utils/globalConstants';

export default function Index() {
  const [starsStorage, setStarStorage] = useState<
    { x: number; y: number; value: number }[]
  >([
    { x: 0, y: 50, value: 4 },
    { x: 100, y: 200, value: -5 },
    { x: 200, y: 400, value: 2 },
  ]);
  const [starsCounter, setStarsCounter] = useState<number>(starsStorage.length);
  const [pause, setPause] = useState<boolean>(true);
  const [intervalState, setIntervalState] = useState<any>();
  const [timerInterval, setTimerInterval] = useState<any>();
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<any>(0);

  const clickStart = (pauseStatus) => {
    if (pauseStatus) {
      let startTime = Date.now();
      setTimerInterval(
        setInterval(() => {
          setTimer(Date.now() - startTime);
        }, 1000),
      );
    }
  };

  const clickPause = () => {
    if (pause) {
      setPause(false);
      setIntervalState(
        setInterval(() => {
          setStarStorage((prev) => {
            return prev
              .filter((el) => {
                if (el.y >= MAX_Y_POSITION) {
                  setScore((p) => p + el.value);
                  createStar(setStarStorage);
                }
                return el.y < MAX_Y_POSITION;
              })
              .map((el, idx, arr) => {
                if (arr.length !== 3) {
                  setStarsCounter(arr.length);
                }
                return { ...el, y: el.y + STAR_STEP };
              });
          });
        }, 20),
      );
    } else {
      clearInterval(intervalState);
      setPause(true);
    }
  };

  return (
    <>
      <ImageContainer>
        <Image
          src="/background.png"
          alt="Picture of the author"
          layout="fill"
        />
      </ImageContainer>
      <HeaderLayout setPause={clickPause} score={score} timer={timer} />
      <FallingStarsZone>
        {starsStorage.map((el, idx) => {
          return (
            <>
              <StarContainer
                coordX={el.x}
                coordY={el.y}
                key={idx}
                value={el.value}
              />
            </>
          );
        })}
      </FallingStarsZone>
    </>
  );
}

const ImageContainer = styled.div`
  z-index: -1;
`;
