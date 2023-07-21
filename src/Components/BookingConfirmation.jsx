import React from 'react';

export const BookingConfirmation = ({ booking }) => (
  <div>
    <h2>Booking Confirmed!</h2>
    <p>You have booked the facility on {booking.date} at {booking.time}.</p>
  </div>
);
