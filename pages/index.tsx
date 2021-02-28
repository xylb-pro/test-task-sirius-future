import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { FallingStarsZone } from '../layouts/FallingStarsZone';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { StarContainer } from '../layouts/StarContainer';
import { createStar } from '../utils/createStar';
import {
  BASE_SPAWN_DELAY,
  MAX_STAR_COUNT,
  MAX_Y_POSITION,
  STAR_STEP,
} from '../utils/globalConstants';

export default function Index() {
  const [starsStorage, setStarStorage] = useState<
    { x: number; y: number; value: number }[]
  >([]);
  const [pause, setPause] = useState<boolean>(true);
  const [intervalState, setIntervalState] = useState<NodeJS.Timeout>();
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout>();
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const clickRestart = (): void => {
    setPause(true);
    setScore(0);
    setTimer(0);
    setStarStorage([]);
    clearInterval(intervalState);
    clearInterval(timerInterval);
  };

  const clickStart: () => void = () => {
    let startTime: number = Date.now();
    if (starsStorage.length === 0) {
      setTimerInterval(
        setInterval(() => {
          setTimer(Date.now() - startTime);
        }, 1000),
      );
      for (let i = 0; i < MAX_STAR_COUNT; i++) {
        setTimeout(() => {
          createStar(setStarStorage);
        }, i * BASE_SPAWN_DELAY);
      }
    }
    clickPause();
  };

  const clickPause: () => void = () => {
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
              .map((el) => {
                return { ...el, y: el.y + STAR_STEP };
              });
          });
        }, 20),
      );
    } else {
      clearInterval(timerInterval);
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
      <HeaderLayout
        setPause={clickPause}
        score={score}
        timer={timer}
        pauseStatus={pause}
        clickStart={clickStart}
        clickRestart={clickRestart}
      />
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
