import {
  InfoWrapper,
  InfoTitle,
  InfoList,
  InfoItem,
  InfoItemText,
  InfoIconsWrapper,
  CircleIcon,
} from './TrackerInfoList.styled';

const TrackerInfoList = () => {
  return (
    <InfoWrapper>
      <InfoTitle>Why drink water</InfoTitle>
      <InfoList>
        <InfoItem>
          <InfoIconsWrapper>
            <CircleIcon />
          </InfoIconsWrapper>
          <InfoItemText>Supply of nutrients to all organs</InfoItemText>
        </InfoItem>
        <InfoItem>
          <InfoIconsWrapper>
            <CircleIcon />
          </InfoIconsWrapper>
          <InfoItemText>Providing oxygen to the lungs</InfoItemText>
        </InfoItem>
        <InfoItem>
          <InfoIconsWrapper>
            <CircleIcon />
          </InfoIconsWrapper>
          <InfoItemText>Maintaining the work of the heart</InfoItemText>
        </InfoItem>
        <InfoItem>
          <InfoIconsWrapper>
            <CircleIcon />
          </InfoIconsWrapper>
          <InfoItemText>Release of processed substances</InfoItemText>
        </InfoItem>
        <InfoItem>
          <InfoIconsWrapper>
            <CircleIcon />
          </InfoIconsWrapper>
          <InfoItemText>
            Ensuring the stability of the internal environment
          </InfoItemText>
        </InfoItem>
        <InfoItem>
          <InfoIconsWrapper>
            <CircleIcon />
          </InfoIconsWrapper>
          <InfoItemText>Maintaining within the normal temperature</InfoItemText>
        </InfoItem>
        <InfoItem>
          <InfoIconsWrapper>
            <CircleIcon />
          </InfoIconsWrapper>
          <InfoItemText>
            Maintaining an immune system capable of resisting disease
          </InfoItemText>
        </InfoItem>
      </InfoList>
    </InfoWrapper>
  );
};

export default TrackerInfoList;
