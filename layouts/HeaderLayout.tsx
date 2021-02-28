import styled from '@emotion/styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onClickPause,
  onClickRestart,
  onClickStart,
} from '../redux/gameState/actions';
import { RootState } from '../redux/rootReducer';
import { getNormalizeTime } from '../utils/getNormalizeTime';

type HeaderLayoutType = {};

export const HeaderLayout: React.FC<HeaderLayoutType> = () => {
  const dispatch = useDispatch();

  const store = useSelector((state: RootState) => state.state);

  const checkDisabled = () => {
    if (store.isOnPause && store.isFirstGame) {
      return false;
    }
    return !store.isOnPause;
  };

  return (
    <>
      <HeaderContainer>
        <ControlPanel>
          <PanelElement>
            <ControlPanelButton
              onClick={() => dispatch(onClickStart())}
              disabled={checkDisabled()}
            >
              {store.isOnPause && !store.isFirstGame ? 'Continue' : 'Start'}
            </ControlPanelButton>
          </PanelElement>
          <PanelElement>
            <ControlPanelButton
              onClick={() => dispatch(onClickPause())}
              disabled={store.isOnPause}
            >
              Pause
            </ControlPanelButton>
          </PanelElement>
          <PanelElement>
            <ControlPanelButton
              onClick={() => {
                dispatch(onClickRestart());
              }}
            >
              Restart
            </ControlPanelButton>
          </PanelElement>
        </ControlPanel>
        <ScorePanel>
          <PanelElement>Star Count: {store.starsCount}</PanelElement>
          <PanelElement>{store.score} points</PanelElement>
          <PanelElement>{getNormalizeTime(store.timer)}</PanelElement>
        </ScorePanel>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  position: sticky;
  z-index: 1;
  width: 100%;
  height: 100px;
  background-color: #5478c4;
  display: flex;
  justify-content: space-between;
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 40%;
`;

const ScorePanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 50%;
`;

const PanelElement = styled.div``;

const ControlPanelButton = styled.button`
  width: 120px;
  margin: 0 auto;
  font-size: 20px;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: #14e4da;
  :active {
    transform: scale(0.97);
  }
  :disabled {
    cursor: not-allowed;
    background-color: #24928d;
  }
  transition: background-color 1s ease;
`;
