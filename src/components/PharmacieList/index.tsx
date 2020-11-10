import {faPlus, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Text} from 'react-native-svg';
import colors from '../../styles/colors';

import {
  Container,
  InfoMed,
  LogoMed,
  LogoDiv,
  TitleDiv,
  TitleMed,
  Subtitle,
  ValueButton,
  ButtonPrice,
  ButtonBuy,
} from './styles';

interface PharmacieListProps {
  url: string;
  text: string;
  subText: string;
  value: string;
}

const PharmacieList: React.FC<PharmacieListProps> = ({
  url,
  text,
  subText,
  value,
}) => {
  return (
    <Container>
      <InfoMed>
        <LogoDiv>
          <LogoMed source={{uri: url}} />
        </LogoDiv>
        <TitleDiv>
          <TitleMed>{text}</TitleMed>
          <Subtitle>{subText}</Subtitle>
        </TitleDiv>
      </InfoMed>
      <ValueButton>
        <ButtonPrice>
          <ButtonBuy color={colors.primary} icon={faPlusCircle}>
            R$ 4,47
          </ButtonBuy>
        </ButtonPrice>
      </ValueButton>
    </Container>
  );
};

export default PharmacieList;
