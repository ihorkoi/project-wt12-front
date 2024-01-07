import {
  Button,
  Container,
  WaterAmountWrapper,
  Header,
  WaterAmount,
} from './DailyNorma.styled';
import { useAuth } from 'hooks/useAuth';
import MyDailyNormaModal from 'components/MyDailyNormaModal';

const MyDailyNormaHome = ({ openModal }) => {
  const { dailyNorma } = useAuth();

  const openMyDailyNormaModal = () => {
    openModal(<MyDailyNormaModal />);
  };

  return (
    <Container>
      <Header>My daily norma</Header>
      <WaterAmountWrapper>
        <WaterAmount>{`${dailyNorma}L`}</WaterAmount>
        <Button onClick={openMyDailyNormaModal}>Edit</Button>
      </WaterAmountWrapper>
    </Container>
  );
};

export default MyDailyNormaHome;
