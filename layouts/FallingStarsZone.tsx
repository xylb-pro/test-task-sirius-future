import styled from '@emotion/styled';

type FallingStarsZoneType = {};

export const FallingStarsZone: React.FC<FallingStarsZoneType> = ({
  children,
}) => {
  return (
    <>
      <ZoneContainer>{children}</ZoneContainer>
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
