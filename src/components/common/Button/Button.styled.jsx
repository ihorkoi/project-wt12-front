import styled from 'styled-components';
import '../../../css/styles.css';
import '../../../css/fonts.css';

// const Button = styled.button(({ width, buttonType }) => ({
//   width: `${width}px`,

//   color:
//     buttonType === 'cancel' ? `var(--primary-color)` : `var(--primary-white)`,
//   backgroundColor:
//     buttonType === 'cancel'
//       ? `var(--secondary-lighblue)`
//       : `var(--primary-color)`,
// }));

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--primary-white);
  background-color: var(--primary-color);
  border: transparent;

  padding: 10px 30px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
