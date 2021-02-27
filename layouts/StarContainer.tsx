import styled from '@emotion/styled';
import Image from 'next/image';

export const StarContainer = ({ coordX, coordY, value }) => {
  return (
    <StyledStarContainer coordinates={calculateCoordinates(coordX, coordY)}>
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

const StyledStarContainer = styled.div<{ coordinates: string }>`
  position: absolute;
  transform: ${(p) => p.coordinates};
`;

const StartValue = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
`;
