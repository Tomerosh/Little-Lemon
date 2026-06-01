import { useReducer } from "react";
import BookingForm from "./BookingForm";

export default function BookingPage({availableTimes, changeTimes}) {
    
    return <>
        <label className="booking-label">RESERVE A TABLE</label>
    <BookingForm availableTimes={availableTimes} changeTimes={changeTimes}/>
    </>
}