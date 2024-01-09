import styled from 'styled-components';
import '../../css/styles.css';
import '../../css/fonts.css';
import { ReactComponent as CloseSvg } from '../../img/icons/close-icon.svg';

export const ModalWrapper = styled.div`
  z-index: 1000;
  margin-top: 40px;
  margin-bottom: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  width: 280px;
  padding: 24px 12px 24px 12px;
  border-radius: 10px;

  overflow: hidden;
  overflow-y: auto;

  min-height: 816px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px 32px 24px;
    min-height: 676px;
    width: 656px;
  }
  @media screen and (min-width: 1440px) {
    min-height: 712px;
    width: 544px;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.23;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: transparent;
`;

export const FormulasWrapper = styled.div`
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const Gender = styled.p`
  font-size: 16px;
  line-height: 1.25;
`;

export const Formula = styled.span`
  color: var(--primary-color);

  font-size: 18px;
  line-height: 1.33;
`;

export const HighlightedAsterisk = styled.span`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 12px;
  line-height: 1.33;
`;

export const FormulasDescription = styled.p`
  padding: 10px;
  margin-bottom: 24px;

  color: var(--secondart-grey);
  border-radius: 10px;
  border: 1px solid var(--secondary-lighblue);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTitle = styled.p`
  // margin-bottom: 16px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const CalculatesWrapper = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  label {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 16px;
    line-height: 1.25;
  }

  input[type='radio'] {
    &:checked {
      background-color: var(--primary-color); 
      border-color: var(--primary-color); /
    }
  }
`;

export const RequiredAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CalculatedAmount = styled.b`
  display: flex;
  align-items: center;
  display: inline-block;
  color: var(--primary-color);
  flex-shrink: 0;
  margin-left: 6px;
  font-size: 18px;
  line-height: 24px;
`;

export const SaveBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  @media (min-width: 768px) {
    button {
      width: 160px;
      height: 44px;
    }
  }
`;

export const CloseIcon = styled(CloseSvg)`
  width: 100%;
  height: 100%;
`;
