import DatePicker from "react-datepicker";
// import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import styled from "styled-components";

export const Wrapper = styled.div`
    color:var(--primary-color);
    input{
        color: var(--primary-color);
        width:256px;
        padding:12px 10px;
        border-radius: 6px;
        border: 1px solid var( --secondary-lighblue);
    }

`

export const TimePicker =({startDate, setStartDate})=>{
    // const [startDate, setStartDate] = useState(new Date());

    return(<Wrapper>
        <DatePicker
        selected={startDate}
        
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        // showTimeInput
        timeIntervals={5}
        timeCaption="Time"
        dateFormat="HH:mm"
        timeFormat="HH:mm"
        /></Wrapper>)
}