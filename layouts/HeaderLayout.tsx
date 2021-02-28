import styled from '@emotion/styled';
import { getNormalizeTime } from '../utils/getNormalizeTime';

type HeaderLayoutType = {
  setPause?: () => void;
  clickStart?: () => void;
  clickRestart?: () => void;
  score: number;
  timer: number;
  pauseStatus: boolean;
};

export const HeaderLayout: React.FC<HeaderLayoutType> = ({
  setPause,
  clickStart,
  clickRestart,
  score,
  timer,
  pauseStatus,
}) => {
  const checkDisabled = () => {
    if (pauseStatus && timer === 0) {
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
              {pauseStatus && timer !== 0 ? 'Continue' : 'Start'}
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
            <ControlPanelButton onClick={() => clickRestart()}>
              Restart
            </ControlPanelButton>
          </PanelElement>
        </ControlPanel>
        <ScorePanel>
          <PanelElement>{score} points</PanelElement>
          <PanelElement>{getNormalizeTime(timer)}</PanelElement>
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
  flex-basis: 20%;
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
