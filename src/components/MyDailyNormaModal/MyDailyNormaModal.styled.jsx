import styled from 'styled-components';
import '../../css/styles.css';
import '../../css/fonts.css';
import { ReactComponent as CloseSvg } from '../../img/icons/close-icon.svg';

export const ModalWrapper = styled.div`
  width: 256px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 652px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
    margin: 0 auto;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
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

export const FormulasDescription = styled.p`
  padding: 10px;
  margin-bottom: 24px;

  //   color: var(--secondary-lighblue);
  border-radius: 10px;
  border: 1px solid var(--secondary-lighblue);

  font-size: 12px;
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

  label {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 16px;
    line-height: 1.25;
  }

  input:checked {
    fill: var(--primary-color);
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
  width: 24px;
  height: 24px;
`;
