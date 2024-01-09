import { useEffect, useState } from "react";
import closesvg from '../../img/icons/close-icon.svg';
import { CloseIcon, Modal, Overlay, StyledP } from "./CalendarModal.styled";


export const CalendarModal = ({isOpen, onClose, selectedDay, selectedMonth , buttonRef}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  const selectedMonthDate = new Date();
  selectedMonthDate.setMonth(selectedMonth - 1); 
  
  const selectedMonthName = selectedMonthDate.toLocaleDateString('en-US', { month: 'long' });

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const [modalStyle, setModalStyle] = useState({});

  const modalWidth = 292; 
  const calculateModalPosition = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let left = buttonRect.left;
      let top = buttonRect.top + buttonRect.height;

      if (left < 0) {
        left = buttonRect.right;
      }

      if (top < 0) {
        top = buttonRect.bottom;
      }

      if (left + modalWidth > screenWidth) {
        left = screenWidth - modalWidth;
      }

      setModalStyle({
        left: `${left}px`,
        top: `${top}px`,
      });
    }
  };

  useEffect(() => {
    calculateModalPosition();
  }, [isOpen, buttonRef]);

  console.log(isOpen);
  if (!isOpen) return null;
  return (
    <Overlay onClick={handleClose}>
      <Modal onClick={handleModalClick}>
      <CloseIcon><img src={closesvg} alt="close icon" onClick={handleClose}/></CloseIcon>
      <div>{selectedDay}, {selectedMonthName}</div>
      <StyledP>Daily norma:</StyledP>
      <p>Fulfillment of the daily norm:</p>
      <p>How many servings of water:</p>
      </Modal>
    </Overlay>
  );
};

