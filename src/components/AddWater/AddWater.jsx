import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import {
  IconClose,
  ModalName,
  Subtitle,
  Wrapper,
  ButtonModal,
  SpanTextModal,
} from './AddWater_styled';
import { ModalParams } from './CommonModalComp';
import { useDispatch } from 'react-redux';
import { addWaterRecord } from '../../redux/water/waterOperations';

export const customStylesPhone = {
  content: {
    marginRight: 'auto',
    marginLeft: 'auto',
    bottom: 'auto',
    padding: '24px 12px',
    borderRadius: '10px',
    background: '#FFF',
    minWidth: '280px',
    inset: '40px 20px auto',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.80)',
  },
};

export const customStylesTablet = {
  content: {
    marginRight: 'auto',
    marginLeft: 'auto',
    bottom: 'auto',
    width: '704px',
    padding: '32px 24px',
    borderRadius: '10px',
    background: '#FFF',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.80)',
  },
};

export const customStylesDesktop = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '592px',
    padding: '32px 24px',
    borderRadius: '10px',
    background: '#FFF',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.80)',
  },
};

Modal.setAppElement('#modal_addWater-root');

export const AddWaterModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentWater, setCurrentWater] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    return;
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const increment = () => {
    setCurrentWater(Number(currentWater) + 50);
  };
  const decrement = () => {
    if (currentWater < 50) {
      setCurrentWater(0);
      return;
    }
    setCurrentWater(currentWater - 50);
  };

  const handleWater = e => {
    setCurrentWater(e.target.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    const newCupWater = {
      waterAmount: values.currentWater,
      time: values.startDate,
    };

    dispatch(addWaterRecord(newCupWater));
    resetForm();
  };

  return (
    <>
      <ButtonModal onClick={openModal}>
        <SpanTextModal>Add water</SpanTextModal>
      </ButtonModal>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={
          isPhone
            ? customStylesPhone
            : isTablet
            ? customStylesTablet
            : customStylesDesktop
        }
        contentLabel="Example Modal"
      >
        <Wrapper>
          <ModalName>Add water</ModalName>
          <IconClose onClick={closeModal} />
        </Wrapper>
        <Subtitle>Choose a value:</Subtitle>
        <ModalParams
          decrement={decrement}
          increment={increment}
          currentWater={currentWater}
          startDate={startDate}
          setStartDate={setStartDate}
          handleSubmit={handleSubmit}
          handleWater={handleWater}
        />
      </Modal>
    </>
  );
};
