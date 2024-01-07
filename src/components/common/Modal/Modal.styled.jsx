import styled from 'styled-components';

const Container = styled.div({
  borderRadius: '10px',
  background: '#fff',
  padding: '24px 12px',
});

export const ModalContainer = styled(Container)`
  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1234;

  background: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 1440px) {
    scrollbar-color: transparent transparent;
    -ms-overflow-style: none;
    overflow-y: scroll;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;
