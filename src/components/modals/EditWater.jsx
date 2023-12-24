import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  export const EditWater = (waterRecord)=>{
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentWater, setCurrentWater] = useState(250);

    const afterOpenModal=()=> {
        return
        }

    const increment =()=>{
        console.log(currentWater + 50)
        console.log(Math.round((currentWater) / 50))
        setCurrentWater(currentWater + 50)
    }
    const decrement =()=>{
        if (currentWater< 50){
            setCurrentWater(0)
            return
        }
        setCurrentWater(currentWater - 50)
    }
    const handler = (evt) =>{
        setCurrentWater(Number(evt.target.value))
    }
    return(
        <div>
      <button onClick={()=>{setIsOpen(true)}}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={()=>{ setIsOpen(false)}}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Edit the entered amount of water</h2>
        <button onClick={()=>{ setIsOpen(false)}}>close</button>
        <div>glass, amount, time</div>
        <label>Correct entered data:</label>
        <div className="counter">
        <h2>Count: {currentWater}</h2>
        <button type="button" onClick={decrement}>Decrement</button>
        <button type="button" onClick={increment}>Increment</button>
        <form action="">
        <label style={{display: 'block'}}>Recording time:
            <input type="date" />
        </label>
        <label style={{display: 'block'}}>Enter the value of the water used:
            <input type="number" min={0} max={999} value={Number(currentWater).toString()} onChange={handler}/>
        </label>
        </form>
      </div>
      </Modal>
    </div>
    )
  }