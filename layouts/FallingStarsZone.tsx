import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { StarContainer } from './StarContainer';

type FallingStarsZoneType = {};

export const FallingStarsZone: React.FC<FallingStarsZoneType> = () => {
  const starsStorage = useSelector(
    (state: RootState) => state.state.starsStorage,
  );
  return (
    <>
      <ZoneContainer>
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
      </ZoneContainer>
    </>
  );
};

const ZoneContainer = styled.div`
  position: relative;
  margin: 0 auto;
  border: 2px solid black;
  width: 800px;
  height: calc(100vh - 100px);
`;
