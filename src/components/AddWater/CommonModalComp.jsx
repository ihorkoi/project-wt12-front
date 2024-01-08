import React from 'react';
import { Formik } from 'formik';
import { TimeChange } from './Datepicker';

import {
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
  Btn,
} from './CommonModalComp_styled';

export const ModalParams = ({
  decrement,
  increment,
  currentWater,
  startDate,
  setStartDate,
  handleSubmit,
  handleWater,
}) => {
  return (
    <>
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
        onSubmit={(values, actions) => handleSubmit(values, actions)}
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
              name="currentWater"
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
    </>
  );
};
