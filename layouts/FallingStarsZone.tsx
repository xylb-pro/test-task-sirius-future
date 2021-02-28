import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStar } from '../redux/gameState/actions';
import { RootState } from '../redux/rootReducer';
import { StarContainer } from './StarContainer';

type FallingStarsZoneType = {};

export const FallingStarsZone: React.FC<FallingStarsZoneType> = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.state);
  return (
    <>
      <ZoneContainer>
        {store.starsStorage.map((el, idx) => {
          return (
            <StarContainer
              coordX={el.x}
              coordY={el.y}
              key={idx}
              value={el.value}
              onMouseDown={() => {
                if (store.activeGameMode && !store.isOnPause) {
                  dispatch(deleteStar(idx));
                }
              }}
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
  width: 800px;
  height: calc(100vh - 100px);
  user-select: none;
`;
