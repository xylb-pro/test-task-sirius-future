import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeActiveGameMode,
  onClickPause,
  onClickRestart,
  onClickStart,
  setMaxStarCount,
} from '../redux/gameState/actions';
import { RootState } from '../redux/rootReducer';
import { colors } from '../style/colors';
import { getNormalizeTime } from '../utils/getNormalizeTime';
import { SwitchButton } from './SwitchButton';

export const HeaderLayout: React.FC = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.state);
  let inputField = useRef(null);

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
            <ControlPanelButton onClick={() => dispatch(onClickRestart())}>
              Restart
            </ControlPanelButton>
          </PanelElement>
        </ControlPanel>
        <GameMode>
          <StarCountTitle>Max Stars</StarCountTitle>
          <StarCountInput
            ref={inputField}
            type="number"
            min="3"
            max="20"
            value={store.maxStarCount}
            onChange={(e) => dispatch(setMaxStarCount(e.target.valueAsNumber))}
            onMouseOver={() => inputField.current.focus()}
            onMouseOut={() => inputField.current.blur()}
          />
          <GameModeText>Active Game Mode</GameModeText>
          <SwitchButton
            onClick={() => {
              dispatch(changeActiveGameMode());
            }}
            selectorPosition={store.activeGameMode}
          />
        </GameMode>
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
  background-color: ${colors.$purple};
  display: flex;
  justify-content: space-between;
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 30%;
`;

const ScorePanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 30%;
`;

const GameMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 30%;
`;

const StarCountInput = styled.input`
  border: none;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 5px 5px;
  max-width: 32px;
  font-size: 18px;
  color: ${colors.$white};
  background-color: ${colors.$purpleWeak};
  cursor: pointer;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

const StarCountTitle = styled.p`
  color: ${colors.$white};
`;

const GameModeText = styled.p`
  color: ${colors.$white};
`;

const PanelElement = styled.div`
  color: ${colors.$white};
`;

const ControlPanelButton = styled.button`
  width: 120px;
  margin: 0 auto;
  font-size: 20px;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: ${colors.$buttonBlue};
  :active {
    transform: scale(0.97);
  }
  :disabled {
    cursor: not-allowed;
    background-color: ${colors.$buttonBlueDisabled};
  }
  transition: background-color 1s ease;
`;
