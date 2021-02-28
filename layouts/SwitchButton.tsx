import styled from '@emotion/styled';
import { colors } from '../style/colors';

type SwitchButtonType = {
  onClick?(): void;
  selectorPosition: boolean;
};

type SwitchButtonSelectorType = {
  selectorPosition: boolean;
  backgroundColor?: string;
};

type SwitchButtonLayoutType = {
  backgroundColor?: string;
};

export const SwitchButton: React.FC<SwitchButtonType> = ({
  onClick = () => {},
  selectorPosition,
}) => {
  return (
    <SwitchButtonLayout
      onClick={() => onClick()}
      backgroundColor={
        selectorPosition
          ? setSwitchButtonStyle().backgroundColorLayout.enabled
          : setSwitchButtonStyle().backgroundColorLayout.disabled
      }
    >
      <SwitchButtonSelector
        selectorPosition={selectorPosition}
        backgroundColor={setSwitchButtonStyle().backgroundColorSelector}
      />
    </SwitchButtonLayout>
  );
};

const setSwitchButtonStyle = () => {
  return {
    backgroundColorLayout: {
      disabled: colors.$purpleWeak,
      enabled: colors.$blue,
    },
    backgroundColorSelector: colors.$absolutlyWhite,
  };
};

const SwitchButtonLayout = styled.div<SwitchButtonLayoutType>`
  position: relative;
  width: 64px;
  height: 34px;
  border-radius: 25px;
  border: none;
  background-color: ${(p) => p.backgroundColor};
  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const SwitchButtonSelector = styled.div<SwitchButtonSelectorType>`
  position: absolute;
  height: 26px;
  width: 26px;
  left: ${(p) => (p.selectorPosition ? '34px' : '4px' || '4px')};
  top: 4px;
  border-radius: 100%;
  background-color: ${(p) => p.backgroundColor};
  transition: left 0.2s ease;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;
