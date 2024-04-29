import React from "react";
import './App.css';


const Day = ({ dayInfo }) => {
    switch (dayInfo) {
      case '1':
        return <p>Monday - Start of the week</p>;
      case '2':
        return <p>Tueday - Second day of the week</p>;
      case '3':
        return <p>Wednesday - Mid day of the week</p>;
      case '4':
        return <p>Thursday - Nearing Weekend</p>;
      case '5':
        return <p>Friday - Last day of the week</p>;
      default:
        return <p>None - Please enter valid numbers from 1 to 5</p>;
    }
  };

const DaysOfTheWeek = () =>{

const[day , setDay]=React.useState('')
const  changeNumber = (e) =>{
    setDay(e.target.value);
}

return (
    <div className="container">
        <input type="text" value={day} onChange={changeNumber} placeholder="ENTER THE NUMBER" />
   
        <Day dayInfo={day} />
    </div>
)
}


export default DaysOfTheWeek