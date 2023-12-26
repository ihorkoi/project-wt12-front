import { AddWater } from '../AddWater/AddWater';
import {
  WelcomeTrackerWrapper,
  WelcomeTrackerTitle,
  WelcomeTrackerSubTitle,
  BenefitsTitle,
  BenefitsList,
  BenefitsItem,
  BenefitsInfo,
  TryTrackerBtn,
  TryTrackerLink,
  IconsWrapper,
  CalendarIcon,
  ChartbarIcon,
  ScrewdriverIcon,
} from './WelcomeTracker.styled';

const WelcomeTracker = () => {
  return (
    <WelcomeTrackerWrapper>
      <WelcomeTrackerTitle>Water consumption tracker</WelcomeTrackerTitle>
      <WelcomeTrackerSubTitle>
        Record daily water intake and track
      </WelcomeTrackerSubTitle>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <BenefitsList>
        <BenefitsItem>
          <IconsWrapper>
            <CalendarIcon />
          </IconsWrapper>
          <BenefitsInfo>Habit drive</BenefitsInfo>
        </BenefitsItem>
        <BenefitsItem>
          <IconsWrapper>
            <ChartbarIcon />
          </IconsWrapper>
          <BenefitsInfo>View statistics</BenefitsInfo>
        </BenefitsItem>
        <BenefitsItem>
          <IconsWrapper>
            <ScrewdriverIcon />
          </IconsWrapper>
          <BenefitsInfo>Personal rate setting</BenefitsInfo>
        </BenefitsItem>
      </BenefitsList>
      <TryTrackerBtn>
        <TryTrackerLink to="/signup">Try Tracker</TryTrackerLink>
      </TryTrackerBtn>
      <AddWater />
    </WelcomeTrackerWrapper>
  );
};

export default WelcomeTracker;
