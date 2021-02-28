import styled from '@emotion/styled';
import React from 'react';

type HeaderLayoutType = {
  setPause?: () => void;
  clickStart?: () => void;
  clickRestart?: () => void;
  starCount?: number;
  score: number;
  timer: string;
  pauseStatus: boolean;
  isNewGame: boolean;
};

export const HeaderLayout: React.FC<HeaderLayoutType> = ({
  setPause,
  clickStart,
  clickRestart,
  starCount,
  score,
  timer,
  pauseStatus,
  isNewGame,
}) => {
  const checkDisabled = () => {
    if (pauseStatus && isNewGame) {
      return false;
    }
    return !pauseStatus;
  };
  return (
    <>
      <HeaderContainer>
        <ControlPanel>
          <PanelElement>
            <ControlPanelButton
              onClick={() => clickStart()}
              disabled={checkDisabled()}
            >
              {pauseStatus && !isNewGame ? 'Continue' : 'Start'}
            </ControlPanelButton>
          </PanelElement>
          <PanelElement>
            <ControlPanelButton
              onClick={() => setPause()}
              disabled={pauseStatus}
            >
              Pause
            </ControlPanelButton>
          </PanelElement>
          <PanelElement>
            <ControlPanelButton
              onClick={() => {
                clickRestart();
              }}
            >
              Restart
            </ControlPanelButton>
          </PanelElement>
        </ControlPanel>
        <ScorePanel>
          <PanelElement>Star Count: {starCount}</PanelElement>
          <PanelElement>{score} points</PanelElement>
          <PanelElement>{timer}</PanelElement>
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
