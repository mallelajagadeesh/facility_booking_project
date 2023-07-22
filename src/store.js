import { configureStore } from '@reduxjs/toolkit'
import facilityReducer from './facilitySlice'
export const store = configureStore({
  reducer: {
    facilities:facilityReducer
  },
})