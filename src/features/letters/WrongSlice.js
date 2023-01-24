import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const WrongSlice = createSlice({
  name: 'wrongCalc',
  initialState,
  reducers: {
    increment: (state) => {
        state.value += 1
    },
    refresh: (state) => {state.value = 0}
  }
})

// Action creators are generated for each case reducer function
export const { increment, refresh } = WrongSlice.actions

export default WrongSlice.reducer