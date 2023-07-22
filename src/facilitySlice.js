import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clubhouse: [],
  tennisCourt: [],
};
const facilitySlice=createSlice({
    name:'facility',
    initialState,
    reducers:{
        bookfacility:(state,action)=>{
            state[action.payload.facilityName] = state[action.payload.facilityName].concat(action.payload.dates)
            console.log(action.payload)
        }
    }
})

export const { bookfacility } = facilitySlice.actions

export default facilitySlice.reducer