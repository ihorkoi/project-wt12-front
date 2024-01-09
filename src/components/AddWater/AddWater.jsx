import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Formik } from 'formik';
// import * as Yup from 'yup';
import {
  IconClose,
  ModalName,
  Subtitle,
  Wrapper,
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
  ErrorMsg,
  ButtonModal,
  SpanTextModal,
  Btn,
} from './AddWater_styled';
import { TimeChange } from './Datepicker';
import { useDispatch } from 'react-redux';
import { addWaterRecord } from '../../redux/water/waterOperations';

// const waterSchema = Yup.object().shape({
//   number: Yup.number()
//     .max(5000, 'Must be less than 5000')
//     .positive()
//     .integer()
//     .required(),
//   // .matches(/^\d{1,9}$/, {
//   //   message: 'Must be less than 5000',
//   // }),
// });

const customStylesPhone = {
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

const customStylesTablet = {
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

const customStylesDesktop = {
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
  // const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

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
    console.log(values);
    const newCupWater = {
      waterAmount: currentWater.toString(),
      time: values.startDate.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    dispatch(addWaterRecord(newCupWater));
    closeModal();
    resetForm();

    setCurrentWater(0);
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
        <InfoWater>Amount of water: </InfoWater>
        <ContainerCalcWater>
          <Btn>
            <ButtonMinus type="button" onClick={decrement} />
          </Btn>
          <DataWater>{currentWater}ml</DataWater>
          <Btn>
            <ButtonPlus type="button" onClick={increment} />
          </Btn>
        </ContainerCalcWater>
        <Formik
          initialValues={{
            currentWater,
            startDate,
          }}
          // validationSchema={waterSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <InfoTime>
              Recording time:
              <TimeChange
                name="time"
                value={startDate}
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </InfoTime>
            <IntoWaterData>
              Enter the value of the water used:
              <StyledField
                type="number"
                name="number"
                min={1}
                max={5000}
                value={currentWater}
                onChange={handleWater}
              />
              <ErrorMsg name="name" component="div" />
            </IntoWaterData>
            <WrapperResult>
              <ResultWater>{currentWater}ml</ResultWater>
              <ButtonSave type="submit">
                <SpanText>Save</SpanText>
              </ButtonSave>
            </WrapperResult>
          </StyledForm>
        </Formik>
      </Modal>
    </>
  );
};
