import {IconProp} from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Button, ButtonText, IconBackground, Icon} from './styles';

interface ButtonAndIconProps extends RectButtonProperties {
  icon: IconProp;
  color: string;
  children: string;
}

const ButtonAndIcon: React.FC<ButtonAndIconProps> = ({
  children,
  color,
  icon,
  ...rest
}) => (
  <Button color={color} {...rest}>
    <ButtonText>{children}</ButtonText>
    <IconBackground color={color}>
      <Icon icon={icon} />
    </IconBackground>
  </Button>
);

export default ButtonAndIcon;
