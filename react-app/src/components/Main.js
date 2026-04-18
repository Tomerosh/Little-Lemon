//import foodImg from "../assets/images/food-tray.jpg"
import { Routes, Route } from "react-router";
import Homepage from "./HomePage"
import BookingPage from "./BookingPage"
import LoadingPage from "./LoadingPage";
import { useEffect, useReducer } from "react";

function updateTimes(state, action) {

  return state.filter(time => time !== action)
}

export default function Main() {


  function initializeTimes(date) {
    fetchData(date)
      .then(respones => {
      })
    let times = [];
    for (let i = 17; i < 23; i++) {
      for (let j = 0; j < 6; j += 3) {
        //times.push(i.toString() + ':00')
        times.push(`${i}:${j}0`)
      }
    }
    return times

  }
  async function fetchData() {
    /*fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
    .then((response) => response.text()
    .then(res => console.log(res))
    )
    .catch((error) => console.log(error));
    */
  }
  const [availableTimes, changeTimes] = useReducer(updateTimes, initializeTimes())

  useEffect(() => {
    fetchData()

  }, [])
  return <main>
    <Routes >
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<LoadingPage />}></Route>
      <Route path="/menu" element={<LoadingPage />}></Route>
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} changeTimes={changeTimes} />}></Route>
      <Route path="/order" element={<LoadingPage />}></Route>
      <Route path="/login" element={<LoadingPage />}></Route>
    </Routes>
  </main>
}