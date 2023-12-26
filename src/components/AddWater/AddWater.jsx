import Modal from 'react-modal';
import { useState } from 'react';
import { Formik } from 'formik';
import {
  IconClose,
  ModalName,
  Subtitle,
  WrapperName,
  InfoWater,
  ContainerCalcWater,
  ButtonMinus,
  ButtonPlus,
  DataWater,
  InfoTime,
  StyledForm,
  IntoWaterData,
  StyledField,
  WrapperResult,
  ButtonSave,
  SpanText,
  ResultWater,
} from './AddWater_styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '592px',
    // height: '504px',
    padding: '32px 24px',
  },
};

// Modal.setAppElement('#modal_addWater-root');

export const AddWater = () => {
  const currentDate = new Date();

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  console.log(formattedTime);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentWater, setCurrentWater] = useState(0);
  const [currentTime, setCurrentTime] = useState(formattedTime);

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
    setCurrentWater(currentWater + 50);
  };
  const decrement = () => {
    if (currentWater < 50) {
      setCurrentWater(0);
      return;
    }
    setCurrentWater(currentWater - 50);
  };

  return (
    <>
      <button onClick={openModal}>Add water</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <WrapperName>
          <ModalName>Add water</ModalName>
          <IconClose onClick={closeModal} />
        </WrapperName>
        <Subtitle>Choose a value:</Subtitle>
        <InfoWater>Amount of water: </InfoWater>
        <ContainerCalcWater>
          <ButtonMinus type="button" onClick={decrement} />
          <DataWater>{currentWater}ml</DataWater>
          <ButtonPlus type="button" onClick={increment} />
        </ContainerCalcWater>
        <Formik>
          <StyledForm>
            <InfoTime>
              Recording time:
              {/* <StyledField type="date" value={currentTime} /> */}
              <StyledField
                type="time"
                value={currentTime}
                onChange={e => setCurrentTime(e.target.value)}
              />
            </InfoTime>
            <IntoWaterData>
              Enter the value of the water used:
              <StyledField type="number" value={currentWater} />
            </IntoWaterData>
          </StyledForm>
        </Formik>
        <WrapperResult>
          <ResultWater>{currentWater}ml</ResultWater>
          <ButtonSave type="submit">
            <SpanText>Save</SpanText>
          </ButtonSave>
        </WrapperResult>
      </Modal>
    </>
  );
};
