import React from 'react';
import { Facility } from './Facility';

export const FacilityList = ({ facilities }) => (
  <div>
    {facilities.map(facility => (
      <Facility key={facility.id} {...facility} />
    ))}
  </div>
);
