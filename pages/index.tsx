import styled from '@emotion/styled';
import Image from 'next/image';

import { FallingStarsZone } from '../layouts/FallingStarsZone';
import { HeaderLayout } from '../layouts/HeaderLayout';

export default function Index() {
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
      <FallingStarsZone />
    </>
  );
}

const ImageContainer = styled.div`
  z-index: -1;
`;
