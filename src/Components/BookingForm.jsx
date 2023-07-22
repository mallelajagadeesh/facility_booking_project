import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookfacility } from "../facilitySlice";

const BookingForm = () => {
  const [facilityName,setFacilityName] = useState("");
  const facilites = useSelector((state) => state.facilities);
  const [isAvailable,setIsAvailable] = useState(true) 
    const [dateRange,setDateRange] = useState({
        startDate:"",
        endDate:""
    })

  const dispatch = useDispatch()
  console.log(facilites);

  const handleChange=(e)=>{
    console.log(e.target.value)
    if(e.target.name.indexOf("Date")>-1){
        const newDates = {...dateRange}
        newDates[e.target.name] = e.target.value
        setDateRange(newDates)
        console.log("You are changing the Dates !!")
    }else{
      setFacilityName(e.target.value)
    }
  }

  const checkAvailability=()=>{
    const datesArray = getDatesBetween(dateRange);
    const facilityDetails = {
      facilityName,
      dates:datesArray
    }
    const selectedFacility = facilites[facilityName]
    let check = null 
    datesArray.forEach((val)=>{
      check = selectedFacility.includes(val);
    })
    if(check){
      setIsAvailable(false)
    }else{
      setIsAvailable(true)
      dispatch(bookfacility(facilityDetails))
    }
    console.log(selectedFacility)
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  function getDatesBetween({startDate, endDate}) {
    const dates = [];
    const currentDate = new Date(startDate);
    endDate = new Date(endDate);
  
    while (currentDate <= endDate) {
      dates.push(formatDate(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }
  
  return (
    <div className="booking-form">
      <form>
        <div className="form-group">
          <span className="form-label">Select Facility</span>
          <select className="form-control" aria-label="Default select example" onChange={handleChange}>
            <option selected>Select Facility</option>
            {Object.keys(facilites).map((fac) => (
              <option value={fac}>{fac}</option>
            ))}
          </select>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <span className="form-label">Start Date</span>
              <input className="form-control" type="date" name="startDate" required value={dateRange.startDate} onChange={handleChange}/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <span className="form-label">End Date </span>
              <input className="form-control" type="date" name="endDate" required value={dateRange.endDate} onChange={handleChange}/>
            </div>
          </div>
        </div>

        <div className="form-btn">
          <button className="submit-btn" type="button" onClick={checkAvailability}>Check availability</button>
        </div>
      </form>

              {isAvailable ? <></>:<h2 style={{color:"red"}}>Booking Failed, Already Booked</h2>}
    </div>
  );
};

export default BookingForm;
