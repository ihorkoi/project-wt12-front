import { TimePicker } from 'components/common/TimePicker/TimePicker.jsx';
import { useState } from 'react';
import {
  ModalWrapper,
  ModalOverlay,
  EdtiWaterTitle,
  EditWaterClose,
  WaterInfo,
  EditWaterFormInvitation,
  WaterAmountRegulator,
  WaterAmountButton,
  WaterAmount,
  WaterAmountInput,
  WaterAmountBelow
} from './EditWater.styled';
import cross from '../../img/icons/cross.svg';
import glass from '../../img/icons/glass.svg';

export const EditWater = waterRecord => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentWater, setCurrentWater] = useState(250);
  const [startDate, setStartDate] = useState(new Date());

  const toggleIsOpen = () => {
    setIsOpen(!modalIsOpen);
  };

  const increment = () => {
    if (currentWater % 50 !== 0) {
      setCurrentWater(Math.ceil(currentWater / 50) * 50);
      return;
    }
    setCurrentWater(currentWater + 50);
  };
  const decrement = () => {
    if (currentWater < 50) {
      setCurrentWater(0)
      return
    }
    if (currentWater % 50 !== 0) {
      setCurrentWater(Math.floor(currentWater / 50) * 50);
      return;
    }
    setCurrentWater(currentWater - 50);
  };
  const handler = evt => {
    setCurrentWater(Number(evt.target.value));
  };

  return (
    <div>
      <button onClick={toggleIsOpen}>Open Modal</button>
      {modalIsOpen && (
        <ModalOverlay>
          <ModalWrapper>
            <EdtiWaterTitle>Edit the entered amount of water</EdtiWaterTitle>
            <EditWaterClose onClick={toggleIsOpen}>
              <img src={cross} alt="close" />
            </EditWaterClose>
            <WaterInfo>
              <img src={glass} alt="glass of water" />
              <p>{currentWater}ml</p>
              <p>{startDate.getHours() + ':' + startDate.getMinutes()}</p>
            </WaterInfo>
            <EditWaterFormInvitation>
              Correct entered data:
            </EditWaterFormInvitation>
            <div className="counter">
              <form action="">
                <label htmlFor="">
                  Amount of water:
                  <WaterAmountRegulator>
                    <WaterAmountButton type="button" onClick={decrement}>
                      -
                    </WaterAmountButton>
                    <WaterAmount> {currentWater}ml</WaterAmount>
                    <WaterAmountButton type="button" onClick={increment}>
                      +
                    </WaterAmountButton>
                  </WaterAmountRegulator>
                </label>
                <label htmlFor="">
                  Recording time:
                  <TimePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </label>
                <EditWaterFormInvitation>
                  Enter the value of the water used:
                </EditWaterFormInvitation>
                <WaterAmountInput
                  type="number"
                  min={0}
                  max={999}
                  value={Number(currentWater).toString()}
                  onChange={handler}
                />
              </form>
              <WaterAmountBelow>{currentWater}ml</WaterAmountBelow>
              <button>Save</button>
            </div>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </div>
  );
};
