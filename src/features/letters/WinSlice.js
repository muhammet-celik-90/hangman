import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

export const WinSlice = createSlice({
  name: 'win',
  initialState,
  reducers: {
    turn: (state) => {
        state.value = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { turn } = WinSlice.actions

export default WinSlice.reducer