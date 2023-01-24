import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ''
}

export const RandomWordSlice = createSlice({
  name: 'randomWordSlice',
  initialState,
  reducers: {
    rWord: (state, action) => {
        state.value += action.payload
    },
    temizle: (state) => {state.value = ""}
  }
})

// Action creators are generated for each case reducer function
export const { rWord, temizle } = RandomWordSlice.actions

export default RandomWordSlice.reducer