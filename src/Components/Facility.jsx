import React from 'react';

export const Facility = ({ id, name, description }) => (
  <div>
    <h2>{name}</h2>
    <p>{description}</p>
    <button>Book Now</button>
  </div>
);
