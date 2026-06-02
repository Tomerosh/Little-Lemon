import { useReducer } from "react";
import BookingForm from "./BookingForm";

export default function BookingPage({availableTimes, changeTimes}) {
    
    return <>
    <div className="header">
        <h2 className="booking-label">Reserve a Table</h2>
    </div>
    <BookingForm availableTimes={availableTimes} changeTimes={changeTimes}/>
    </>
}