import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import Container from 'components/common/Container';
import { Wrapper } from './HomePage.styled';
import MyDailyNormaHome from 'components/MyDailyNormaHome/MyDailyNormaHome';

export default function HomePage() {
  return (
    <Wrapper>
      <Container>
        <MyDailyNormaHome />
        <TodayWaterList />
      </Container>
    </Wrapper>
  );
}
