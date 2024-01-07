import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import Container from 'components/common/Container';
import { Wrapper } from './HomePage.styled';

export default function HomePage() {
  return (
    <Wrapper>
      <Container>
        <TodayWaterList />
      </Container>
    </Wrapper>
  );
}
