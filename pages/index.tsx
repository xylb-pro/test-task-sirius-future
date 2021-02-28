import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FallingStarsZone } from '../layouts/FallingStarsZone';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { StarContainer } from '../layouts/StarContainer';
import {
  changeScore,
  changeStarsStorage,
  changeTimer,
  createStar,
  dropStarsStorage,
  increaseStarsCount,
  setIsFirstGame,
  setPause,
  setScore,
  setStarsCount,
  setTimerStartValue,
  updateStarsSpawnInterval,
  updateTimerInterval,
} from '../redux/gameState/actions';
import { RootState } from '../redux/rootReducer';
import { getNormalizeTime } from '../utils/getNormalizeTime';
import * as CONST from '../utils/globalConstants';

export default function Index() {
  // const [starsStorage, setStarStorage] = useState<
  //   { x: number; y: number; value: number }[]
  // >([]);

  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.state);

  const clickRestart = (): void => {
    dispatch(setPause(true));
    dispatch(setScore(0));
    dispatch(changeTimer(0));
    dispatch(dropStarsStorage());
    dispatch(setTimerStartValue(0));
    clearInterval(store.starsSpawnInterval);
    clearInterval(store.timerInterval);
    dispatch(setIsFirstGame(true));
    dispatch(setStarsCount(0));
  };

  const clickStart: () => void = () => {
    let startTime: number = Date.now();
    const temp = setInterval(() => {
      dispatch(changeTimer(store.timerStartValue + Date.now() - startTime));
    }, 1000);
    dispatch(updateTimerInterval(temp));
    if (store.starsStorage.length === 0) {
      dispatch(setIsFirstGame(false));
      for (let i = 0; i < CONST.MAX_STAR_COUNT; i++) {
        // setTimeout(() => {
        dispatch(createStar());
        // }, i * CONST.BASE_SPAWN_DELAY);
      }
    }
    clickPause();
  };

  const clickPause: () => void = () => {
    if (store.isOnPause) {
      dispatch(setPause(false));
      const temp = setInterval(() => {
        dispatch(changeStarsStorage());
      }, CONST.STAR_STEP_MS);
      dispatch(updateStarsSpawnInterval(temp));
    } else {
      clearInterval(store.timerInterval);
      clearInterval(store.starsSpawnInterval);
      dispatch(setTimerStartValue(store.timer));
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
        score={store.score}
        timer={getNormalizeTime(store.timer)}
        isNewGame={store.isFirstGame}
        pauseStatus={store.isOnPause}
        clickStart={clickStart}
        clickRestart={clickRestart}
        starCount={store.starsCount}
      />
      <FallingStarsZone>
        {store.starsStorage.map((el, idx) => {
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
