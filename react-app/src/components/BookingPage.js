import { useReducer } from "react";
import BookingForm from "./BookingForm";

export default function BookingPage({availableTimes, changeTimes}) {
    
    return <>
    <BookingForm availableTimes={availableTimes} changeTimes={changeTimes}/>
    </>
}