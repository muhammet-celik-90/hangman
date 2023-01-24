import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ''
}

export const LettersSlice = createSlice({
  name: 'selectedLetters',
  initialState,
  reducers: {
    selLet: (state, action) => {
        state.value += action.payload
    },
    clear: (state) => {state.value = ""}
  }
})

// Action creators are generated for each case reducer function
export const { selLet, clear } = LettersSlice.actions

export default LettersSlice.reducer