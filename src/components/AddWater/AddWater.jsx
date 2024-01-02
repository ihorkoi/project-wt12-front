import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
} from './AddWater_styled';
import { TimeChange } from './Datepicker';

const waterSchema = Yup.object().shape({
  name: Yup.number()
    .min(5)
    .max(5000, 'Must be less than 5000')
    .positive()
    .integer()
    .required(),
});

const customStylesPhone = {
  content: {
    marginRight: '20px',
    marginLeft: '20px',
    bottom: 'auto',
    minWidth: '280px',
    padding: '24px 12px',
    borderRadius: '10px',
    background: '#FFF',
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

axios.defaults.baseURL = 'https://localhost:3000';

// const API_KEY = '';

export const AddWater = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentWater, setCurrentWater] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

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
    setCurrentWater(Math.abs(e.target.value));
  };

  const fetchData = async (currentWater, startDate) => {
    const resp = await axios.post(
      `/api/water?water=${currentWater}&time=${startDate}`
    );
    return resp.data;
  };

  const handleSubmit = async values => {
    try {
      const data = await fetchData(values.currentWater, values.startDate);

      console.log('Server response:', data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button onClick={openModal}>Add water</button>
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
          <ButtonMinus type="button" onClick={decrement} />
          <DataWater>{currentWater}ml</DataWater>
          <ButtonPlus type="button" onClick={increment} />
        </ContainerCalcWater>
        <Formik
          initialValues={{
            currentWater,
            startDate,
          }}
          validationSchema={waterSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <InfoTime>
              Recording time:
              <TimeChange
                value={startDate}
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </InfoTime>
            <IntoWaterData>
              Enter the value of the water used:
              <StyledField
                type="number"
                value={currentWater}
                onChange={handleWater}
              />
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
