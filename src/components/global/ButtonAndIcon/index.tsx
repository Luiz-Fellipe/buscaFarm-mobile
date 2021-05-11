import {IconProp} from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Button, ButtonText, IconBackground, Icon} from './styles';

interface ButtonAndIconProps extends RectButtonProperties {
  icon: IconProp;
  color: string;
  children: string;
  loading?: boolean;
}

const ButtonAndIcon: React.FC<ButtonAndIconProps> = ({
  children,
  color,
  icon,
  loading,
  ...rest
}) => (
  <Button color={color} {...rest}>
    <ButtonText>
      {loading ? <ActivityIndicator size="large" color="#fff" /> : children}
    </ButtonText>
    <IconBackground color={color}>
      <Icon icon={icon} />
    </IconBackground>
  </Button>
);

export default ButtonAndIcon;
