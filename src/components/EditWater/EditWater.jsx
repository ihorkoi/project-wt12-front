import Modal from 'react-modal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  customStylesTablet,
  customStylesPhone,
  customStylesDesktop,
} from 'components/AddWater/AddWater';
import { ModalParams } from 'components/AddWater/CommonModalComp';
import {
  IconClose,
  ModalName,
  Subtitle,
  Wrapper,
  ButtonEditModal,
  SpanTextModal,
  WaterInfo,
  WaterGlass,
  WaterMl,
  PreviousTime,
} from './EditWater_styled';
import { editWaterRecord } from '../../redux/water/waterOperations';
import { useDispatch } from 'react-redux';

Modal.setAppElement('#modal_addWater-root');

export const EditWaterModal = ({
  openModal,
  afterOpenModal,
  closeModal,
  increment,
  decrement,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentWater, setCurrentWater] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  const updateWater = value => {
    setCurrentWater(value);
  };

  const updateStartDate = date => {
    setStartDate(date);
  };

  const handleUpdate = () => {
    dispatch(editWaterRecord({ waterAmount: currentWater, time: startDate }));
    closeModal();
  };

  return (
    <>
      <ButtonEditModal onClick={openModal}>
        <SpanTextModal>Edit water</SpanTextModal>
      </ButtonEditModal>
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
          <ModalName>Edit the entered amount of water</ModalName>
          <IconClose onClick={closeModal} />
        </Wrapper>
        <WaterInfo>
          <WaterGlass />
          <WaterMl>{currentWater} ml</WaterMl>
          <PreviousTime>{startDate}</PreviousTime>
        </WaterInfo>

        <Subtitle>Correct entered data:</Subtitle>
        <ModalParams
          decrement={decrement}
          increment={increment}
          currentWater={currentWater}
          startDate={startDate}
          setStartDate={updateStartDate}
          handleSubmit={handleUpdate}
          handleWater={updateWater}
        />
      </Modal>
    </>
  );
};
