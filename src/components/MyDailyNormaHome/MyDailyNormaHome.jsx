import {
  Button,
  Container,
  WaterAmountWrapper,
  Header,
  WaterAmount,
} from './MyDailyNormaHome.styled';
import { useSelector } from 'react-redux';
import MyDailyNormaModal from 'components/MyDailyNormaModal';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import { useContext } from 'react';
import { selectTodayWater } from '../../redux/selectors';

const MyDailyNormaHome = () => {
  const toggleModal = useContext(ModalContext);
  const dailyNorma = useSelector(selectTodayWater);

  const openMyDailyNormaModal = () => {
    toggleModal(<MyDailyNormaModal />);
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
