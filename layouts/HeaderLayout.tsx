import styled from '@emotion/styled';

type HeaderLayoutType = {
  setPause?: () => void;
  setStart?: () => void;
  setRestart?: () => void;
  score: number;
  timer: string;
};

export const HeaderLayout: React.FC<HeaderLayoutType> = ({
  setPause,
  score,
}) => {
  return (
    <>
      <HeaderContainer>
        <ControlPanel>
          <PanelElement>
            <ControlPanelButton>Start</ControlPanelButton>
          </PanelElement>
          <PanelElement>
            <ControlPanelButton onClick={() => setPause()}>
              Pause
            </ControlPanelButton>
          </PanelElement>
          <PanelElement>
            <ControlPanelButton>Restart</ControlPanelButton>
          </PanelElement>
        </ControlPanel>
        <ScorePanel>
          <PanelElement>{score} points</PanelElement>
          <PanelElement>SS seconds</PanelElement>
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
`;
