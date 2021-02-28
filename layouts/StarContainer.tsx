import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

type StarContainerType = {
  coordX: number;
  coordY: number;
  value: number;
};

export const StarContainer: React.FC<StarContainerType> = ({
  coordX,
  coordY,
  value,
}) => {
  return (
    <StyledStarContainer
      style={{ transform: calculateCoordinates(coordX, coordY) }}
    >
      <Image
        src="/star.png"
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <StartValue>{value}</StartValue>
    </StyledStarContainer>
  );
};

function calculateCoordinates(X: number, Y: number) {
  return `translate(${X}px, ${Y}px)`;
}

const StyledStarContainer = styled.div`
  position: absolute;
`;

const StartValue = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
`;
