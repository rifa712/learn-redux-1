import { configureStore } from '@reduxjs/toolkit'
// reducer
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
