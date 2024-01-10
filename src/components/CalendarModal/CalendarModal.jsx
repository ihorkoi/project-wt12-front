import { useEffect, useState } from 'react';
import closesvg from '../../img/icons/close-icon.svg';
import {
  CloseIcon,
  Modal,
  Overlay,
  StyledP,
  StyledData,
  StyledSpan,
} from './CalendarModal.styled';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

export const CalendarModal = ({
  isOpen,
  onClose,
  selectedDay,
  selectedMonth,
  buttonRef,
  dayData,
}) => {
  const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
  const dailyNorm = useSelector(state => state.user.dailyWaterRequirement);

  useEffect(() => {
    const handleKeyDown = event => {
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

  const selectedMonthName = selectedMonthDate.toLocaleDateString('en-US', {
    month: 'long',
  });

  const handleModalClick = event => {
    event.stopPropagation();
  };

  const [modalStyle, setModalStyle] = useState({});

  const modalWidth = 292;
  useEffect(() => {
    const calculateModalPosition = () => {
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const screenWidth = window.innerWidth;

        let left = buttonRect.left;
        let top = buttonRect.top;

        if (left < 0) {
          left = buttonRect.right;
        }

        if (top < 0) {
          top = buttonRect.bottom;
        }

        if (left + modalWidth > screenWidth) {
          left = screenWidth - modalWidth;
        }
        top -= 190;
        const style = isPhone
          ? { top: `${top}px` }
          : { left: `${left}px`, top: `${top}px` };
        setModalStyle(style);
      }
    };
    calculateModalPosition();
  }, [isOpen, buttonRef, isPhone]);

  if (!isOpen) return null;
  return (
    <Overlay onClick={handleClose}>
      <Modal onClick={handleModalClick} style={{ ...modalStyle }}>
        <CloseIcon>
          <img src={closesvg} alt="close icon" onClick={handleClose} />
        </CloseIcon>
        <StyledData>
          {selectedDay}, {selectedMonthName}
        </StyledData>
        <StyledP>
          Daily norma:<StyledSpan> {dailyNorm / 1000} L</StyledSpan>
        </StyledP>
        <StyledP>
          Fulfillment of the daily norm:
          <StyledSpan> {dayData ? dayData.percent : 0}%</StyledSpan>
        </StyledP>
        <StyledP>
          How many servings of water:
          <StyledSpan> {dayData ? dayData.recordsCount : 0}</StyledSpan>
        </StyledP>
      </Modal>
    </Overlay>
  );
};
