import Modal from 'react-modal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { editWaterRecord } from '../../redux/water/waterOperations';
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
  WaterInfo,
  WaterGlass,
  WaterMl,
  PreviousTime,
} from './EditWater_styled';
import { selectTodayWater } from '../../redux/selectors';

Modal.setAppElement('#modal_addWater-root');

export const EditWaterModal = ({
  modalIsOpen,
  setIsOpen,
  waterAmount,
  _id,
  time,
}) => {
  const [currentWater, setCurrentWater] = useState(waterAmount);
  const [startDate, setStartDate] = useState(new Date());
  const [isTimeChanged, setIsTimeChanged] = useState(false);

  const dispatch = useDispatch();

  const waterLastCup = useSelector(selectTodayWater);

  const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  // const openModal = () => {
  //   setIsOpen(true);
  // };

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
      waterAmount: currentWater.toString(),
      time: isTimeChanged
        ? values.startDate.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })
        : time,
      _id,
    };

    dispatch(editWaterRecord(newCupWater));
    resetForm();
    closeModal();
  };

  return (
    <>
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
            <WaterMl>{currentWater} ml</WaterMl>
          )}
          {waterLastCup.length === 0 ? (
            <PreviousTime>No notes yet</PreviousTime>
          ) : (
            <PreviousTime>{time}</PreviousTime>
          )}
        </WaterInfo>

        <Subtitle>Correct entered data:</Subtitle>
        <ModalParams
          decrement={decrement}
          increment={increment}
          currentWater={currentWater}
          startDate={startDate}
          setStartDate={setStartDate}
          handleSubmit={handleSubmit}
          handleWater={handleWater}
          setIsTimeChanged={setIsTimeChanged}
        />
      </Modal>
    </>
  );
};
