import styled from 'styled-components';

export const BackDropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const SettingContainerStyled = styled.div`
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 1008px;
  max-height: 592px;
  background-color: var(--primary-white);
  border-radius: 10px;
  padding: 32px 24px;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    p {
      font-family: 'Roboto-medium';
      font-size: 26px;
      line-height: 32px;
    }
    svg {
      margin-left: auto;
      cursor: pointer;
      &:hover path,
      &:active path {
        stroke: var(--secondary-orange);
      }
    }
  }
  form {
    p {
      font-family: 'Roboto-medium';
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 8px;
    }
    input[type='text'],
    input[type='password'] {
      border: 1px solid #d7e3ff;
      outline: none;
      border-radius: 6px;
      width: 100%;
      padding: 12px 10px;
      color: var(--primary-color);
      &::placeholder {
        color: #9ebbff;
      }
    }
    .photo-container {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      img {
        display: block;
        border-radius: 50%;
        margin-right: 8px;
        object-fit: cover;
        object-position: center;
        height: 80px;
      }
      .label-file {
        display: flex;
        cursor: pointer;
        p {
          color: var(--primary-color);
          font-size: 14px;
          line-height: 18px;
          margin-bottom: 0;
        }
        svg {
          margin-right: 8px;
        }
        &:hover p,
        &:active p {
          color: var(--secondary-orange);
        }
        &:hover path,
        &:active path {
          stroke: var(--secondary-orange);
        }
      }
    }
  }
  .under-photo-container {
    display: flex;
    gap: 24px;
    .password-input-container {
      p {
        font-family: 'Roboto-regular';
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 8px;
      }
      .password-input {
        margin-bottom: 12px;
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          cursor: pointer;
          path {
            stroke: var(--primary-color);
          }
        }
      }
    }
  }
  .input-container {
    width: 100%;
    max-width: 392px;
    p {
      margin-bottom: 12px;
    }
    .input-text {
      margin-bottom: 24px;
      p {
        margin-bottom: 8px;
      }
    }
  }
  .btn {
    display: block;
    position: absolute;
    bottom: 32px;
    right: 24px;
    width: 160px;
    max-width: 160px;
    height: 44px;
    background-color: var(--primary-color);
    border-radius: 10px;
    font-family: 'Roboto-medium';
    color: var(--primary-white);
    font-size: 18px;
    line-height: 24px;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    border: none;
    &:hover,
    &:active {
      box-shadow: none;
    }
  }
  .gender-container {
    margin-bottom: 52px;
    div {
      display: flex;
      align-items: center;
      height: 20px;
      input {
        margin-right: 8px;
        cursor: pointer;
        width: 14px;
        height: 14px;
      }
      label {
        cursor: pointer;
        margin-right: 24px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    top: 40px;
    transform: translate(-50%, 0);
    max-width: 704px;
    min-height: 860px;
    .under-photo-container {
      flex-direction: column;
    }
    .gender-container {
      margin-bottom: 24px;
    }
    .input-text:last-child{
        margin-bottom: 0;
    }
  }
  @media screen and (max-width: 767px) {
    max-width: 280px;
    min-height: 852px;
    padding: 32px 12px;
    .under-photo-container {
    }
    .gender-container {
      margin-bottom: 24px;
    }
    .input-container{
        max-width: 256px;
    }
    .btn{
        bottom: 32px;
        right: 50%;
        transform: translateX(50%);
        width: 100%;
        max-width: 256px;
    }
  }
`;
