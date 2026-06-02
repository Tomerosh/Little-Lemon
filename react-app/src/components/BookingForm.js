import { useEffect, useState } from "react";

export default function BookingForm({availableTimes, changeTimes}) {
   
  function getToday() {
    let dat = new Date().toLocaleDateString();
    if (dat.indexOf('/') !== -1){
      dat = dat.split('/')
    }
    else {
      dat = dat.split('.')
    }

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
  const [ Name, setName ] = useState("")
  const [ phone, setPhone ] = useState("")
  const [ email, setEmail ] = useState("")


   function handleSubmit(e) {
      e.preventDefault();
      //console.log(e.target[0].value)
   }

   useEffect(() => {
    //const test = new Date().toLocaleDateString().split('/');
  // console.log(availableTimes)
  //console.log(seededRandom(1))

   },[])
  return (
    <form onSubmit={handleSubmit}>
    <section>
      <label className="input_label" htmlFor="res-date">Choose date</label>
      <input id="res-date" className="book-option" value={date} onChange={e => setDate(e.target.value)} type="date"/>
      <label className="input_label" htmlFor="res-time">Choose time</label>
      <select id="res-time" className="book-option" value={time} onChange={e => {
        setTime(e.target.value)
        //changeTimes(e.target.value)
      }}>
        {availableTimes.map(time => {
          return <option key={time}>{time}</option>
        })}
      </select>
      <label className="input_label" htmlFor="res-guests">Number of guests</label>
      <div className="num-section">
        <button className="num-button" onMouseDown={() => setGuests(prev => parseInt(prev)-1)}>-</button>
        <input id="res-guests" className="book-option" value={guests} onChange={e => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10"/>
        <button className="num-button" onMouseDown={() => setGuests(prev => parseInt(prev)+1)}>+</button>
      </div>
      <label className="input_label" htmlFor="res-occasion">Occasion</label>
      <select id="res-occasion" placeholder="Select.." className="book-option" value={occasion} onChange={e => setOccasion(e.target.value)} >
        <option value='' hidden disabled style={{color: 'grey'}}>Select ..</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Proposal</option>
        <option>Nothing Special</option>
      </select>
    </section>
    <section>
      <h1 className="input_label">Contact Info</h1>
      <label className="input_label" htmlFor="res-name">Name*</label>
      <input id="res-name" placeholder="John Snow" className="book-option" value={Name} onChange={e => setName(e.target.value)} />
      <label className="input_label" htmlFor="res-phone">Phone Number*</label>
      <input id="res-phone" className="book-option" value={phone} onChange={e => setPhone(e.target.value)} />
      <label className="input_label" htmlFor="res-email">Email</label>
      <input id="res-email" className="book-option" value={email} onChange={e => setEmail(e.target.value)} />
            <input className="button book-option" type="submit" value="Make Your reservation" />
    
    </section>
    </form>
  );
}
