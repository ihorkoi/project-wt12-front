import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, Backdrop } from './Modal.styled';

const modalHTML = document.querySelector('#modal');

const Modal = ({ type = 'default', onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  });

  const closeModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={closeModal}>
      <ModalContainer type={type}>{children}</ModalContainer>
    </Backdrop>,
    modalHTML
  );
};

export default Modal;
