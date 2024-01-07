import { createGlobalStyle, styled } from 'styled-components';

export const Wrapper = styled.div`
  input {
    width: 50%;
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
    width: 524px;
    outline: none;

    @media (min-width: 768px) {
      input {
        width: 100%;
      }
    }
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`
 .react-datepicker__wrapper {
    position: relative;
    
  }
  .react-datepicker {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(-15%, 0%);
    padding: 5px;
    background-color: var(--primary-white);
    border: 1px solid var(--secondary-textcolor);
    border-radius: 10px;
    color: var(--primary-black);
    font-size: 12px;
    display: flex;
    width: 100px;
}
  .react-datepicker__header {
    position: relative;
    background-color: var(--primary-color);    
    text-align: center;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    height: 150px;
    list-style: none;
    margin: 0;
    overflow-y: scroll;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
}
  .react-datepicker__close-icon {
    display: none;
  }
`;
