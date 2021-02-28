import styled from '@emotion/styled';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { FallingStarsZone } from '../layouts/FallingStarsZone';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { StarContainer } from '../layouts/StarContainer';
import { RootState } from '../redux/rootReducer';

export default function Index() {
  const store = useSelector((state: RootState) => state.state);

  return (
    <>
      <ImageContainer>
        <Image
          src="/background.png"
          alt="Picture of the author"
          layout="fill"
        />
      </ImageContainer>
      <HeaderLayout />
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
