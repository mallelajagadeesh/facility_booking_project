import React from 'react';
import { BookingForm } from './BookingForm';

export const FacilityDetail = ({ facility, onBook }) => (
  <div>
    <h2>{facility.name}</h2>
    <p>{facility.description}</p>
    <p>Booking Amount: {facility.bookingAmount}</p>
    <BookingForm facilityId={facility.id} onBook={onBook} />
  </div>
);
