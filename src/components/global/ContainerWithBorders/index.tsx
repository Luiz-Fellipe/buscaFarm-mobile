import React from 'react';

import {
  Wrapper,
  BorderLeftTop,
  BorderRightBottom,
  Content,
  BorderLeftVertical,
  BorderLeftHorizontal,
  BorderRightVertical,
  BorderRightHorizontal,
} from './styles';

interface Props {
  widthPercent: string;
  heightPercent: string;
  borderWidthPx: string;
  borderHeightPx: string;
}

const ContainerWithBorders: React.FC<Props> = ({
  children,
  widthPercent,
  heightPercent,
  borderWidthPx,
  borderHeightPx,
}) => {
  return (
    <Wrapper widthPercent={widthPercent} heightPercent={heightPercent}>
      <BorderLeftTop
        borderWidthPx={borderWidthPx}
        borderHeightPx={borderHeightPx}>
        <BorderLeftVertical
          borderWidthPx={borderWidthPx}
          borderHeightPx={borderHeightPx}
        />
        <BorderLeftHorizontal
          borderWidthPx={borderWidthPx}
          borderHeightPx={borderHeightPx}
        />
      </BorderLeftTop>

      <Content>{children}</Content>
      <BorderRightBottom
        borderWidthPx={borderWidthPx}
        borderHeightPx={borderHeightPx}>
        <BorderRightVertical
          borderWidthPx={borderWidthPx}
          borderHeightPx={borderHeightPx}
        />
        <BorderRightHorizontal
          borderWidthPx={borderWidthPx}
          borderHeightPx={borderHeightPx}
        />
      </BorderRightBottom>
    </Wrapper>
  );
};

export default ContainerWithBorders;
