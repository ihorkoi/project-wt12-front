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
import { dailyWaterRequirement } from '../../redux/selectors';

const MyDailyNormaHome = () => {
  const toggleModal = useContext(ModalContext);
  const dailyNorma = useSelector(dailyWaterRequirement);

  const openMyDailyNormaModal = () => {
    toggleModal(<MyDailyNormaModal />);
  };
  return (
    <Container>
      <Header>My daily norma</Header>
      <WaterAmountWrapper>
        <WaterAmount>{`${dailyNorma / 1000} L`}</WaterAmount>
        <Button onClick={openMyDailyNormaModal}>Edit</Button>
      </WaterAmountWrapper>
    </Container>
  );
};

export default MyDailyNormaHome;
