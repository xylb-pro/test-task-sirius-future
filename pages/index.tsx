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
  onClickPause,
  onClickStart,
  restartGame,
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
    dispatch(restartGame());
  };

  const clickStart: () => void = () => {
    dispatch(onClickStart());
  };

  const clickPause: () => void = () => {
    dispatch(onClickPause());
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
