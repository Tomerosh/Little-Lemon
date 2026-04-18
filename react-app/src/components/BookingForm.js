import { useEffect, useState } from "react";

export default function BookingForm({availableTimes, changeTimes}) {
   
  function getToday() {
      
    const dat = new Date().toLocaleDateString().split('/');
    const day = dat[0].length === 1? 0 + dat[0]: dat[0]

    const month = dat[1].length === 1? 0 + dat[1]: dat[1]

    const year = dat[2]
    return year + "-" + month + "-" + day
  }
  const today = getToday()

  const [ date, setDate ] = useState(today)
  const [ time, setTime ] = useState("")
  const [ guests, setGuests ] = useState(2)
  const [ occasion, setOccasion ] = useState("")


   function handleSubmit(e) {
      e.preventDefault();
      //console.log(e.target[0].value)
   }

   useEffect(() => {
    //const test = new Date().toLocaleDateString().split('/');
  console.log(availableTimes)
  //console.log(seededRandom(1))

   },[])
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input value={date} onChange={e => setDate(e.target.value)} type="date" id="res-date" da />
      <label htmlFor="res-time">Choose time</label>
      <select value={time} onChange={e => {
        setTime(e.target.value)
        //changeTimes(e.target.value)
      }} id="res-time ">
        {availableTimes.map(time => {
          return <option key={time}>{time}</option>
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input value={guests} onChange={e => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
