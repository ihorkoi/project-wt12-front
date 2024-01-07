import styled from 'styled-components';
import '../../css/styles.css';
import '../../css/fonts.css';

export const Label = styled.label`
  font-size: 18px;
  line-height: 1.33;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormInput = styled.input`
  width: 100%;

  color: var(--primary-color);
  border-radius: 6px;
  border: 1px solid var(--secondary-lighblue);
  background-color: var(--secondary-verylightblue);

  font-size: 16px;
  line-height: 1.25;
  padding: 12px 10px;

  &::placeholder {
    color: var(--secondary-textcolor);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--secondary-red);
  font-size: 14px;
  line-height: 1.28;
`;
