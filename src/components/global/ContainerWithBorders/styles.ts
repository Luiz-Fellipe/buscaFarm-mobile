import styled from 'styled-components/native';
import colors from '../../../styles/colors';

interface BorderProps {
  borderWidthPx: string;
  borderHeightPx: string;
}
interface WrapperProps {
  widthPercent: string;
  heightPercent: string;
}

export const Wrapper = styled.View<WrapperProps>`
  background-color: ${colors.white};
  width: ${(props) => `${props.widthPercent}%`};
  height: ${(props) => `${props.heightPercent}%`};
  z-index: 1;
`;
export const Content = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const BorderLeftTop = styled.View<BorderProps>``;

export const BorderLeftVertical = styled.View<BorderProps>`
  background-color: ${colors.primary};
  height: ${(props) => `${props.borderHeightPx}px`};
  width: 100px;
  position: absolute;
  z-index: -1;
  left: ${(props) => `-${props.borderWidthPx}px`};
  top: ${(props) => `-${props.borderWidthPx}px`};
  bottom: 0;
  right: 0px;
`;
export const BorderLeftHorizontal = styled.View<BorderProps>`
  background-color: ${colors.primary};
  height: ${(props) => `${props.borderHeightPx}px`};
  width: 100px;
  position: absolute;
  z-index: -1;
  left: ${(props) => `-${props.borderWidthPx}px`};
  top: ${(props) => `-${props.borderWidthPx}px`};
  bottom: 0;
  right: 0px;
`;

export const BorderRightBottom = styled.View<BorderProps>``;

export const BorderRightVertical = styled.View<BorderProps>`
  background: ${colors.primary};
  height: ${(props) => `${props.borderHeightPx}px`};
  width: 100px;
  position: absolute;
  z-index: -1;
  right: ${(props) => `-${props.borderWidthPx}px`};
  bottom: ${(props) => `-${props.borderWidthPx}px`};
`;
export const BorderRightHorizontal = styled.View<BorderProps>`
  background: ${colors.primary};
  height: ${(props) => `${props.borderHeightPx}px`};
  width: 100px;
  position: absolute;
  right: ${(props) => `-${props.borderWidthPx}px`};
  bottom: ${(props) => `-${props.borderWidthPx}px`};
  z-index: -1;
`;
