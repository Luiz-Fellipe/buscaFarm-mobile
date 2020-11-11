import React from 'react';
import {
  faChevronRight,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  Container,
  InfoBudgets,
  ViewIconBudgets,
  TitleDiv,
  TitleMed,
  ValueButton,
  ButtonArrow,
  DateBudgets,
  Price,
  IconBudgets,
  IconArrowRight,
} from './styles';

interface BudgetsListProps {
  text: string;
  price: string;
  textDate: string;
}

const BudgetsList: React.FC<BudgetsListProps> = ({text, price, textDate}) => {
  return (
    <Container>
      <InfoBudgets>
        <ViewIconBudgets>
          <IconBudgets icon={faFileInvoiceDollar} />
        </ViewIconBudgets>
        <TitleDiv>
          <TitleMed>{text}</TitleMed>
          <DateBudgets>{textDate}</DateBudgets>
          <Price>{price}</Price>
        </TitleDiv>
      </InfoBudgets>
      <ValueButton>
        <ButtonArrow>
          <IconArrowRight icon={faChevronRight} />
        </ButtonArrow>
      </ValueButton>
    </Container>
  );
};

export default BudgetsList;
