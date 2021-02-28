import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FallingStarsZone } from '../layouts/FallingStarsZone';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { StarContainer } from '../layouts/StarContainer';
import { setPause } from '../redux/gameState/actions';
import { RootState } from '../redux/rootReducer';
import { createStar } from '../utils/createStar';
import { getNormalizeTime } from '../utils/getNormalizeTime';
import * as CONST from '../utils/globalConstants';

export default function Index() {
  const [starsStorage, setStarStorage] = useState<
    { x: number; y: number; value: number }[]
  >([]);
  // const [pause, setPause] = useState<boolean>(true);
  const [intervalState, setIntervalState] = useState<NodeJS.Timeout>();
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout>();
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [timerStartValue, setTimerStartValue] = useState<number>(0);
  const [starCount, setStarCount] = useState<number>(0);
  const [isNewGame, setIsNewGame] = useState<boolean>(true);

  const dispatch = useDispatch();

  const pause = useSelector((state: RootState) => state.state.isOnPause);

  const clickRestart = (): void => {
    dispatch(setPause(true));
    setScore(0);
    setTimer(0);
    setStarStorage([]);
    setTimerStartValue(0);
    clearInterval(intervalState);
    clearInterval(timerInterval);
    setIsNewGame(true);
    setStarCount(0);
  };

  const clickStart: () => void = () => {
    let startTime: number = Date.now();
    setTimerInterval(
      setInterval(() => {
        setTimer(timerStartValue + Date.now() - startTime);
      }, 1000),
    );
    if (starsStorage.length === 0) {
      setIsNewGame(false);
      for (let i = 0; i < CONST.MAX_STAR_COUNT; i++) {
        setTimeout(() => {
          createStar(setStarStorage);
        }, i * CONST.BASE_SPAWN_DELAY);
      }
    }
    clickPause();
  };

  const clickPause: () => void = () => {
    if (pause) {
      dispatch(setPause(false));
      setIntervalState(
        setInterval(() => {
          setStarStorage((prev) => {
            return prev
              .filter((el, idx, arr) => {
                if (el.y >= CONST.MAX_Y_POSITION) {
                  setScore((p) => p + el.value);
                  createStar(setStarStorage);
                  setStarCount((p) => (p += 1));
                  console.log(arr.length);
                }
                return el.y < CONST.MAX_Y_POSITION;
              })
              .map((el) => {
                return { ...el, y: el.y + CONST.STAR_STEP };
              });
          });
        }, CONST.STAR_STEP_MS),
      );
    } else {
      clearInterval(timerInterval);
      clearInterval(intervalState);
      setTimerStartValue(timer);
      dispatch(setPause(true));
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
        timer={getNormalizeTime(timer)}
        isNewGame={isNewGame}
        pauseStatus={pause}
        clickStart={clickStart}
        clickRestart={clickRestart}
        starCount={starCount}
      />
      <FallingStarsZone>
        {starsStorage.map((el, idx) => {
          return (
            <StarContainer
              coordX={el.x}
              coordY={el.y}
              key={idx}
              value={el.value}
            />
          );
        })}
      </FallingStarsZone>
    </>
  );
}

const ImageContainer = styled.div`
  z-index: -1;
`;
