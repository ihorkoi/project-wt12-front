import Container from 'components/common/Container';
import WelcomeTracker from '../../components/WelcomeTracker';
import TrackerInfoList from 'components/TrackerInfoList';
import { Wrapper, ComponentWrapper } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Wrapper>
      <Container>
        <ComponentWrapper>
          <WelcomeTracker />
          <TrackerInfoList />
        </ComponentWrapper>
      </Container>
    </Wrapper>
  );
};

export default WelcomePage;
