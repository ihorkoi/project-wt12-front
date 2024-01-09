import Modal from 'react-modal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
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
import { selectTodayWater } from '../../redux/selectors';

Modal.setAppElement('#modal_addWater-root');

export const EditWaterModal = ({ increment, decrement, handleSubmit }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentWater, setCurrentWater] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const waterLastCup = useSelector(selectTodayWater);
  const lastCupInfo = waterLastCup.map(({ id, time, waterAmount }) => (
    <>
      key={id}
      currentWater={{ waterAmount }}
      starDate={{ time }}
    </>
  ));

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

  const updateWater = value => {
    setCurrentWater(value);
  };

  const updateStartDate = date => {
    setStartDate(date);
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
          {waterLastCup.length === 0 ? (
            <WaterMl>0 ml</WaterMl>
          ) : (
            <WaterMl>{lastCupInfo.currentWater} ml</WaterMl>
          )}
          {waterLastCup.length === 0 ? (
            <PreviousTime>No notes yet</PreviousTime>
          ) : (
            <PreviousTime>{startDate}</PreviousTime>
          )}

          <PreviousTime>{lastCupInfo.startDate}</PreviousTime>
        </WaterInfo>

        <Subtitle>Correct entered data:</Subtitle>
        <ModalParams
          decrement={decrement}
          increment={increment}
          currentWater={currentWater}
          startDate={startDate}
          setStartDate={updateStartDate}
          handleSubmit={handleSubmit}
          handleWater={updateWater}
        />
      </Modal>
    </>
  );
};
