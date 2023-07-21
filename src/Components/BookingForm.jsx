import React, { useState } from 'react';

export const BookingForm = ({ onBook }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onBook({ date, time });
  };
  const bookFacility = (facilityId, bookingDetails) => {
    setBookings(prevBookings => [...prevBookings, { facilityId, ...bookingDetails }]);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
      <button type="submit">Book</button>
    </form>
  );
};
