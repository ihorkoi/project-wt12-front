import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import Container from 'components/common/Container';
import { Wrapper } from './HomePage.styled';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';

export default function HomePage() {
  return (
    <Wrapper>
      <Container>
        <TodayWaterList />
        <WaterRatioPanel />
      </Container>
    </Wrapper>
  );
}
