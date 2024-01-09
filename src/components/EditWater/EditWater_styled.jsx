import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import { ReactComponent as DecrementBtn } from '../../img/icons/minus-small.svg';
import { ReactComponent as IncrementBtn } from '../../img/icons/plus-small.svg';
import { ReactComponent as Glass } from '../../img/icons/cup.svg';

export const ButtonEditModal = styled.button`
  border: none;
  background: transparent;
  color: var(--primary-color);
`;

export const SpanTextModal = styled.span`
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
`;

export const ModalName = styled.h2`
  color: var(--primary-black);
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const IconClose = styled(CloseIcon)`
  border: none;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

export const Subtitle = styled.h3`
  color: var(--primary-black);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;

export const WaterInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: var(--secondary-verylightblue);
  border-radius: 10px;
  padding: 8px 24px;
  margin-bottom: 24px;
`;

export const WaterGlass = styled(Glass)`
  width: 36px;
  height: 36px;
`;

export const WaterMl = styled.p`
  color: #407bff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33%;
`;

export const PreviousTime = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
`;

export const InfoWater = styled.h4`
  color: var(--primary-black);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
`;

export const ContainerCalcWater = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
`;

export const Btn = styled.button`
  border: none;
  background: transparent;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

export const ButtonMinus = styled(DecrementBtn)`
  width: 44px;
  height: 44px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid var(--secondary-textcolor);
  background: var(--primary-white);
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

export const ButtonPlus = styled(IncrementBtn)`
  width: 44px;
  height: 44px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid var(--secondary-textcolor);
  background: var(--primary-white);
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

export const DataWater = styled.p`
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  padding: 6px 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: var(--secondary-lighblue);
  width: 92px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const InfoTime = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--primary-black);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const IntoWaterData = styled.label`
  color: var(--primary-black);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const StyledField = styled(Field)`
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--secondary-lighblue);
  color: var(--primary-color);
  margin-bottom: 24px;
  margin-top: 12px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 50%;
  outline: none;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 16px;
  color: red;
`;

export const WrapperResult = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
    justify-content: end;
  }
`;

export const ButtonSave = styled.button`
  width: 100%;
  border-radius: 10px;
  background: var(--primary-color);
  padding: 8px 30px;
  margin-top: 16px;
  border: none;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    margin-top: 0;
    width: 160px;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: var(--primary-color);

    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

export const ResultWater = styled.div`
  color: var(--primary-color);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const SpanText = styled.span`
  color: var(--primary-color);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
