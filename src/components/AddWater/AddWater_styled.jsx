import styled from 'styled-components';
import { Form, Field } from 'formik';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import { ReactComponent as DecrementBtn } from '../../img/icons/minus-small.svg';
import { ReactComponent as IncrementBtn } from '../../img/icons/plus-small.svg';

export const WrapperName = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
`;

export const ModalName = styled.h2`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const IconClose = styled(CloseIcon)`
  border: none;
`;

export const Subtitle = styled.h3`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;

export const InfoWater = styled.h4`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
`;

export const ContainerCalcWater = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
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
  border: 1px solid #9ebbff;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
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
  border: 1px solid #9ebbff;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
`;

export const DataWater = styled.div`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #d7e3ff;
  width: 92px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const InfoTime = styled.label`
  display: flex;
  flex-direction: column;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;

export const IntoWaterData = styled.label`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
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
  border: 1px solid #d7e3ff;
  color: #407bff;
  margin-bottom: 24px;
  margin-top: 12px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  width: 524px;
  outline: none;
`;

export const WrapperResult = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

export const ButtonSave = styled.button`
  width: 160px;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const ResultWater = styled.div`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const SpanText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
`;
