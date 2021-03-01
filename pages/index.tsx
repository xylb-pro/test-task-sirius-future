import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';

import { FallingStarsZone } from '../layouts/FallingStarsZone';
import { HeaderLayout } from '../layouts/HeaderLayout';

export default function Index() {
  return (
    <>
      <Head>
        <title>FallingStars | App</title>
      </Head>
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
