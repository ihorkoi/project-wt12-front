import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;
export const ModalContent = styled.div`
  /* Стилі для вмісту модального вікна */
  padding: 20px;
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
export const EditWaterFormInvitation = styled.p`
  font-family: 'Roboto-Medium', sans-serif;
  color: var(--primary-black);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;

export const EditWaterForm = styled.form`
  display: flex;
`;

export const WaterAmountRegulator = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
export const WaterAmount = styled.span`
  display: block;
  width: 96px;
  height: 36px;
  margin: 0 7px;
  padding: 6px 10px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  color: var(--primary-color);
  border-radius: 40px;
  background: #d7e3ff;
`;

export const WaterAmountButton = styled.button`
  border-radius: 30px;
  width: 44px;
  height: 44px;
  border: 1px solid #9ebbff;
  background: var(--primary-white);
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
`;


export const EdtiWaterTitle = styled.h2`
  font-family: 'Roboto-Bold', sans-serif;
  color: var(--primary-black);
  font-size: 26px;
  line-height: 1.23;
  margin-bottom: 24px;
`;

export const EditWaterClose = styled.button`
  position: absolute;
  top: 32px;
  right: 24px;
  padding: 4px 8px;
  border: none;
  background: var(--primary-white);
`;

export const WaterAmountInput = styled.input`
  width: 256px;
  color: var(--primary-color);
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid var(--secondary-lighblue);
`;

export const WaterAmountBelow = styled.span`
color: var(--primary-color);
`